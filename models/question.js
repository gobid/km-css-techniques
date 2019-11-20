var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
    prompt: String
});

module.exports = mongoose.model("Question", questionSchema);