var axios = require("axios");
var cheerio = require("cheerio");


function scraper(cb) {
  axios.get("https://www.charlotteagenda.com/tag/news/").then(function(response){
    // console.log(response);
    var $ = cheerio.load(response.data);
    var results = [];

    $("div.entry-item").each(function(i, element) {
      var title = $(element).find("h1").children().text();
      var link = $(element).find("h1").find("a").attr("href");
      var img = $(element).parent().find("div.thumbnail_image").find("img").attr("data-src");
  
      article = {
        title: title,
        link: link,
        img: img
      };

      results.push(article);
    })
  
    // console.log(results);
    cb(results);
  
  })
} //end of callAxios();


module.exports = scraper;