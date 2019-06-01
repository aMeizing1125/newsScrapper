// Exporting an object containing all of our models

db = {
  Article: require("./Article"),
  Comment: require("./Comment")
}

module.exports = db;