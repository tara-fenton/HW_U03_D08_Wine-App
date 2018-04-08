const promise = require('bluebird');

promise.config({
  longStackTraces: true, // WARNING: Do not set this option in production!
});

const initOptions = {
  promiseLib: promise,
};

// Import pg-promise and initialize the library with an empty object.
const pgp = require('pg-promise')(initOptions);

// Prepare the connection URL from the format: 'postgres://username:password@host:port/database';
const connectionURL = 'postgres://localhost:5432/wine_db';

// Creating a new database connection with the provided URL.
const db = pgp(connectionURL);

module.exports = db;
