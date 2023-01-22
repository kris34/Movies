const Movie = require('../models/Movie');

async function createMovie(data) {
  return Movie.create(data);
}

async function getAll() {
  return Movie.find({});
}

module.exports = {
  createMovie,
  getAll
};
