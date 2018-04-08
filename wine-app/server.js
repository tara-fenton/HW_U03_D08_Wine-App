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

app.get('/api/wines', (request, response) => {
	Wine.findAll().then(wines => {
		// render the list of movies
		response.json(wines)
	})
});
// const jsonParser = bodyParser.json();
//
// app.post('/api/movie', jsonParser, (request, response) => {
//   // Create a new movie with the information provided in request.body
// });
app.listen(3000, () => console.log('Example app listening on port 3000!'))
