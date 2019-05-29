// BOILDER PLATE - START
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// BOILDER PLATE -END


var CommentSchema = new Schema({
  // `title` is of type String
  title: String,
  // `body` is of type String
  body: String
});

// This creates our model from the above schema, using mongoose's model method
var Comment = mongoose.model("Comment", CommentSchema);

// Export the Note model
module.exports = Comment;
