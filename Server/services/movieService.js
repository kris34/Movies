const Movie = require('../models/Movie');
const User = require('../models/User');

async function createMovie(data) {
  return Movie.create(data);
}

async function getAll() {
  return Movie.find({});
}

async function getMovieById(id) {
  return await Movie.findById(id);
}

module.exports = {
  createMovie,
  getAll,
  getMovieById,
  
};
