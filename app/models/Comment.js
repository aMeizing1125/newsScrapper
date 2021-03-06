// BOILDER PLATE - START
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// BOILDER PLATE -END


var CommentSchema = new Schema({
  body: {
    type: String,
    required: true,
    unique: true
  }

});

// This creates our model from the above schema, using mongoose's model method
var Comment = mongoose.model("Comment", CommentSchema);

// Export the Note model
module.exports = Comment;
