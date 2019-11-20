var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
	example_id: Number,
	position: Number,
    prompt: String
});

module.exports = mongoose.model("Question", questionSchema);