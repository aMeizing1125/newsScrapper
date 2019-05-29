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
  db.Article.find({}, function(err, docs) {
    if (err) {
      console.log("Error in displayAll" + err)
    }
    cb(docs);
  })
}


module.exports = {
  insertDB: insertDB,
  displayAll: displayAll

}