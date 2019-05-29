var data = require('../js/data');

function htmlRoutes(app) {
  app.get("/", function(req, res) {

    // Scrapes articles, sends them to mongo database
    data.insertDB();

    // Renders HTML page
    res.render("home");
  })
}

module.exports = htmlRoutes;