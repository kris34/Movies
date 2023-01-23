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

async function likeMovie(id) {
  const movie = await Movie.findById(id);
  movie.likes++;
  return movie.save();
}

async function existingMovie(movieId) {
  const movies = await getAll();
  const movieArr = movies.filter((m) => m._id == movieId);
  let existing = true;

  if (movieArr < 1) {
    existing = false;
  }

  return existing;
}

module.exports = {
  createMovie,
  getAll,
  getMovieById,
  addMyMovie,
  existingMovie,
  likeMovie
};
