const Movie = require('../models/Movie');

async function createMovie(data) {
  return Movie.create(data);
}
