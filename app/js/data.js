var scraper = require('./scraper');
var mongoose = require("mongoose");
var db = require("../models");

function insertDB() {
  scraper(function(allArticles){
    // console.log(allArticles);
    allArticles.forEach(function(thisArticle){
      console.log(thisArticle);
      var query = {title: thisArticle.title};
      db.Article.findOneAndUpdate(query, thisArticle, {upsert: true})
    })
  })
}

insertDB()
