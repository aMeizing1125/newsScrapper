
function apiRoutes(app){
  app.get("/api/all", function(req, res) {
    res.json("hello! ");
    
  })
}

module.exports = apiRoutes;
