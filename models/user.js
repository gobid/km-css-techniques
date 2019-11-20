var mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    responses: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Response"
      }
    ]
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);