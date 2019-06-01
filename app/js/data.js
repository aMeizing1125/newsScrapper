var scraper = require('./scraper');
var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect("mongodb://localhost/scraperHomework", { useNewUrlParser: true });

function insertDB() {
  scraper(function(allArticles){
    // console.log(allArticles);
    allArticles.forEach(function(thisArticle){
      // console.log(thisArticle);
      var query = {title: thisArticle.title};
      db.Article.findOneAndUpdate(query, thisArticle, {upsert: true}, function(response){
        if(response){
          console.log(response);
        }
      })
    })
  })
}

function displayAll(cb) {
  db.Article.find({}).populate("comments")
  .then(function(articles){
    cb(articles);
  })
}

// insert comments Tutor, Darin and Adel helped me with this portion. 
function insertComments(comment, articleId, cb) {
  db.Comment.create(comment) 
    //speaks to database (back and forth)
    .then(function(dbComment) {
      return db.Article.findOneAndUpdate({ _id: articleId }, {$push:{comments: dbComment._id}}, {new:true})
    })
    // receiving the value from the database
    .then(function(dbArticle) {
      cb(dbArticle);
    })
    .catch(function(err) {
      cb(err);
    });   
}



module.exports = {
  insertDB: insertDB,
  displayAll: displayAll, 
  insertComments: insertComments

}