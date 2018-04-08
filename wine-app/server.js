const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
// import models
const Wine = require("./models/Wine");
const app = express();

app.use(cors());

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

// GET list of wines API
app.get('/api/wines', (request, response) => {
	Wine.findAll().then(wines => {
		response.json(wines)
	})
});
// GET a wine API
app.get('/api/wines/:id', (request, response) => {
	const wineId = request.params.id;
	Wine.findById(wineId).then(wine => {
		response.json(wine)
	})
});
// POST a wine API
// app.post('/api/wines', (request, response) => {
// 	Wine.create(name, year, grapes, country, region, description, picture, price).then(wines => {
// 		response.json(wines)
// 	})
// });
app.post("/api/wines", jsonParser, (request, response) => {
	console.log("request.body",request.body)
  const { name, year, grapes, country, region, description, picture, price } = request.body;
  const newWine = {
    name: name,
    year: year,
    grapes: grapes,
    country: country,
    region: region,
    description: description,
    picture: picture,
    price: price
  };
	console.log("name in create ",name)
  Wine.create(newWine).then(wine => {
    response.redirect("/api/wines");
  });
});
// DELETE a wine API
app.delete('/api/wines/:id', (request, response) => {
	const wineId = request.params.id;
	Wine.delete(wineId).then(wine => {
		response.json(wine)
	})
});
// const jsonParser = bodyParser.json();
//
// app.post('/api/movie', jsonParser, (request, response) => {
//   // Create a new movie with the information provided in request.body
// });
app.listen(3000, () => console.log('Example app listening on port 3000!'))
