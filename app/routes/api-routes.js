var data = require('../js/data');

function apiRoutes(app){
  app.get("/api/all", function(req, res) {
    data.displayAll(function(docs) {
      res.json(docs);
    }) 
  })

  app.post("/api/comments/:articleId", function(req, res) {
    var comment = req.body;
    var articleId = req.params.articleId
    data.insertComments(comment, articleId, function(results){
      res.json(results);
    });      
  })
}



module.exports = apiRoutes;
