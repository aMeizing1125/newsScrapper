var data = require('../js/data');

function apiRoutes(app){
  app.get("/api/all", function(req, res) {
    data.displayAll(function(docs) {
      res.json(docs);
    }) 
  })
}



module.exports = apiRoutes;
