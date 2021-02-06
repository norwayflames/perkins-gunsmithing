var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var githubSchema = new Schema({
  // `title` is required and of type String
  displayname: String,
    
  
  // `link` is required and of type String
    email:  String,
    username: String,
  link: String,
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  plan: {
    type: Schema.Types.ObjectId,
    ref: "Plan"
  }
});

// This creates our model from the above schema, using mongoose's model method
// var User = mongoose.model("User", userSchema);
const GithubSchema = new mongoose.Schema(githubSchema, {strict: false});

module.exports = Github = mongoose.model("github", GithubSchema);
// Export the Article model
// module.exports = User;