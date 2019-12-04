var mongoose = require('mongoose');

var responseSchema = new mongoose.Schema({
	question: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Question'
		},
		position: Number,
		prompt: String
	},
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		username: String
	},
	body: String
});

module.exports = mongoose.model('Response', responseSchema);