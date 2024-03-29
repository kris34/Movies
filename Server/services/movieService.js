const Comment = require('../models/Comment');
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

async function likeMovie(movieId, userId) {
  const movie = await getMovieById(movieId);

  if (movie.likes.includes(userId)) {
    throw new Error('You have already liked this movie');
  }

  if (movie._ownerId == userId) {
    throw new Error('You cannot like your own movie!');
  }

  if (movie.dislikes.includes(userId)) {
    movie.dislikes = movie.dislikes.filter((id) => id != userId);
  }

  movie.likes.push(userId);
  return movie.save();
}

async function dislikeMovie(movieId, userId) {
  const movie = await getMovieById(movieId);

  if (movie.dislikes.includes(userId)) {
    throw new Error('You have already disliked this movie');
  }

  if (movie._ownerId == userId) {
    throw new Error('You cannot dislike your own movie!');
  }

  if (movie.likes.includes(userId)) {
    movie.likes = movie.likes.filter((id) => id != userId);
  }

  movie.dislikes.push(userId);

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

async function removeFromWatchlist(movieId) {
  const movie = await Movie.findById(movieId);

  for (let userId of movie.bookmarkedUsers) {
    let user = await User.findById(userId);

    user.myWatchlist = user.myWatchlist.filter(
      (id) => id.toString() != movieId.toString()
    );

    user.save();
  }
}

async function deleteMovie(movieId, userId) {
  const user = await User.findById(userId);
  const comments = await Comment.find({});
  const movieComments = comments.filter((c) => c._movieId == movieId);

  for (let c of movieComments) {
    await Comment.findByIdAndDelete(c._id);
  }

  user.myMovies = user.myMovies.filter((m) => m != movieId);

  user.save();

  return await Movie.findByIdAndDelete(movieId);
}

async function editMovie(id, data) {
  const movie = await getMovieById(id);

  movie.title = data.title;
  movie.genre = data.genre;
  movie.year = data.year;
  movie.directors = data.directors;
  movie.imageUrl = data.imageUrl;
  movie.description = data.description;
  movie.actors = data.actors;

  return movie.save();
}

async function addWatchlist(movieId, userId) {
  let user = await User.findById(userId);
  let movie = await Movie.findById(movieId);
  const updated = [];

  movie.bookmarkedUsers.push(userId);
  await movie.save();
  updated.push(movie);

  user.myWatchlist.push(movieId);
  await user.save();
  updated.push(user);

  return updated;
}

async function removeFromWatchlist(movieId, userId) {
  let user = await User.findById(userId);
  let movie = await Movie.findById(movieId);
  const updated = [];

  user.myWatchlist = user.myWatchlist.filter(
    (m) => m._id.toString() != movieId.toString()
  );
  await user.save();
  updated.push(user);
  movie.bookmarkedUsers = movie.bookmarkedUsers.filter(
    (u) => u._id.toString() != userId.toString()
  );
  await movie.save();
  updated.push(movie);

  return updated;
}

async function getUserWatchlist(userId) {
  const user = await User.findById(userId);
  let watchlist = [];

  for (let movie of user.myWatchlist) {
    watchlist.push(await Movie.findById(movie));
  }

  return watchlist;
}

async function getUserMovies(userId) {
  const user = await User.findById(userId);

  return user.myMovies;
}

module.exports = {
  createMovie,
  getUserMovies,
  getUserWatchlist,
  getAll,
  getMovieById,
  removeFromWatchlist,
  addMyMovie,
  existingMovie,
  likeMovie,
  dislikeMovie,
  deleteMovie,
  editMovie,
  addWatchlist,
};
