var express = require('express'),
	app = express(),
	path = require('path'),
	bodyParser = require('body-parser'),
	fs = require('fs'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	LocalStrategy = require('passport-local'),
	passportLocalMongoose = require('passport-local-mongoose'),
	expressSession = require('express-session'),
	Question = require('./models/question'),
	User = require('./models/user'),
	Response = require('./models/response');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

/* connect to mongoDB Atlas */
mongoose
	.connect(
		'mongodb+srv://KM:KnowledgeMaps@knowledgemaps-ehp5x.mongodb.net/test?retryWrites=true&w=majority',
		{
			useCreateIndex: true,
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		}
	)
	.then(() => {
		console.log('connected to db');
	})
	.catch(err => {
		console.log(err.message);
	});
/* User routes */

app.get('/users', function(req, res) {
	User.find({}, function(err, allUsers) {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			return res.json({ success: true, data: allUsers });
		}
	});
});

app.post('/users', function(req, res) {
	var newUser = {
		username: req.body.username
	};
	User.create(newUser, function(err, newlyCreated) {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			return res.json({ success: true, data: newlyCreated._id });
		}
	});
});
/* Question routes*/
app.get('/questions', function(req, res) {
	Question.find({})
		.sort('position')
		.exec(function(err, allQuestions) {
			if (err) {
				return res.json({ success: false, error: err });
			} else {
				return res.json({ success: true, data: allQuestions });
			}
		});
});

// Not accessed by Client.
app.post('/questions', (req, res) => {
	var newQuestion = {
		example_id: req.body.example_id,
		position: req.body.position,
		prompt: req.body.prompt
	};
	Question.create(newQuestion, function(err, newlyCreated) {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			return res.json({ success: true });
		}
	});
});

/* Response routes*/
app.get('/responses/:user_id', function(req, res) {
	Response.find({"author.id":req.params.user_id})
		.sort('question.position')
		.exec(function(err, allResponses) {
			if (err) {
				return res.json({ success: false, error: err });
			} else {
				return res.json({ success: true, data: allResponses });
			}
		});
});
app.post('/responses', function(req, res) {
	// console.log(req.query.id);
	Question.findById(req.body.question_id, function(err, foundQuestion) {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			console.log(foundQuestion);
			User.findById(req.body.user_id, function(err, foundUser) {
				if (err) {
					return res.json({ success: false, error: err });
				} else {
					var question = {
						id: foundQuestion._id,
						position: foundQuestion.position,
						prompt: foundQuestion.prompt
					};
					var user = {
						id: foundUser._id,
						username: foundUser.username
					}
					var newResponse = { author: user, question: question, body: req.body.body };
					// Create a new response and save to DB
					Response.create(newResponse, function(err, newlyCreated) {
						if (err) {
							return res.json({ success: false, error: err });
						} else {
							foundUser.responses.push(newlyCreated);
							foundUser.save();
							return res.json({ success: true });
						}
					});
				}
			});
		}
	});
});

app.delete('/responses', function(req, res, next) {
	Response.remove({}, function(err) {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			return res.json({ success: true });
		}
	});
});

app.listen(process.env.PORT || 5000, process.env.IP, function() {
	console.log('KM has Started!');
});