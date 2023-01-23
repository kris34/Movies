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

async function addMyMovie(userId, movieId) {
  const movie = await Movie.findById(movieId);
  const user = await User.findById(userId);
  user.myMovies.push(movie._id);
  return user.save();
}

module.exports = {
  createMovie,
  getAll,
  getMovieById,
  addMyMovie
};
