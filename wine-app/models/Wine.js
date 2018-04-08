// WINE MODEL !!!
const db = require("../database/db-connection");

const Wine = {};

// // findOne
// Wine.findByName = name =>
//   db.one("SELECT * FROM wines WHERE name= $1", [name]);
//
// // findOne
// Wine.findById = id => db.one("SELECT * FROM wines WHERE id= $1", [id]);
//

// create CCCC
Wine.create = (name, year, grapes, country, region, description, picture, price) =>
  db.one("INSERT INTO wines (name, year, grapes, country, region, description, picture, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [
    name, year, grapes, country, region, description, picture, price
  ]);

// findAll RRRRR
Wine.findAll = () => db.any("SELECT * FROM wines ORDER BY id");

// // edit UUUUUU
// Wine.edit = wine =>
//   db.one("UPDATE wines SET name = $1 WHERE id= $2 RETURNING id", [
//     wine.wineName,
//     wine.wineId
//   ]);
//
// // delete DDDDDDD
// Wine.delete = id => db.result("DELETE FROM wines WHERE id = $1", [id]);

module.exports = Wine;
