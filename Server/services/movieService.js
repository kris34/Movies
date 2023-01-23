const Movie = require('../models/Movie');
const User = require('../models/User');

async function createMovie(data) {
  return await Movie.create(data);
}

async function getAll() {
  return await Movie.find({});
}

async function getMovieById(id) {
  return await Movie.findById(id);
}

async function getMyMovies(id){ 
  
}

module.exports = {
  createMovie,
  getAll,
  getMovieById,
  
};
