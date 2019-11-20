var express = require('express'),
	app = express(),
	path = require('path'),
	bodyParser = require('body-parser'),
	fs = require('fs'),
	mongoose = require('mongoose'),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    expressSession = require("express-session"),
	Question = require('./models/question'),
	User = require('./models/user'),
	Response = require('./models/response');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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


//PASSPORT CONFIGURE
app.use(expressSession({
    secret: "Knowledge Maps",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

app.get('/', function(req, res) {
	res.send('Landing page');
});


/* Question routes*/
app.get('/questions', function(req, res) {
	Question.find({}, function(err, allQuestions) {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			return res.json({ success: true, data: allQuestions});
		}
	});
});

// Not accessed by Client.
app.post('/questions', (req, res) => {
	var newQuestion = {prompt: req.body.prompt};
	Question.create(newQuestion, function(err, newlyCreated) {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			return res.json({ success: true });
		}
	});
});

/* User routes*/
app.get('/users', function(req, res) {
	User.find({}, function(err, allUsers) {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			return res.json({ success: true, data: allUsers});
		}
	});
});
app.post("/register", function(req,res)
{
    var userObj = {
        username: req.body.username
    };
    User.register(new User(userObj), req.body.password, function(err, user)
    {
        if (err)
        {
            return res.json({ success: false, error: err});
        }
        passport.authenticate("local")(req, res, function(){
			return res.json({ success: true });
        });
    });
});

//logout route
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

app.listen(3000, process.env.IP, function() {
	console.log('KM has Started!');
});