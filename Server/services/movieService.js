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

async function addMovieToUser(userId, movieId) {
  const user = await User.findById(userId);
  user.addedMovies.push(movieId);
  return user.save();
}

module.exports = {
  createMovie,
  getAll,
  getMovieById,
  addMovieToUser
};
