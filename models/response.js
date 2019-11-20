var mongoose = require("mongoose");

var responseSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
    question_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Question"
	},
    body: String
});

module.exports = mongoose.model("Response", responseSchema);