// WINE MODEL !!!
const db = require("../database/index");

const Wine = {};

// // findOne
// Wine.findByName = name =>
//   db.one("SELECT * FROM venues WHERE name= $1", [name]);
//
// // findOne
// Wine.findById = id => db.one("SELECT * FROM venues WHERE id= $1", [id]);
//

// create CCCC
Wine.create = (name, year, grapes, country, region, description, picture, price) =>
  db.one("INSERT INTO venues (name, year, grapes, country, region, description, picture, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [
    name, year, grapes, country, region, description, picture, price
  ]);
//
// // findAll RRRRR
// Wine.findAll = () => db.any("SELECT * FROM venues ORDER BY id");
//
// // edit UUUUUU
// Wine.edit = venue =>
//   db.one("UPDATE venues SET name = $1 WHERE id= $2 RETURNING id", [
//     venue.venueName,
//     venue.venueId
//   ]);
//
// // delete DDDDDDD
// Wine.delete = id => db.result("DELETE FROM venues WHERE id = $1", [id]);

module.exports = Wine;
