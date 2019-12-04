var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    responses: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Response"
      }
    ]
});

module.exports = mongoose.model("User", userSchema);