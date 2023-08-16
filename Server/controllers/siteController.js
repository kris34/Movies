const { hasUser } = require('../middlewares/guards');
const User = require('../models/User');
const {
  postComment,
  getMovieComments,
  getUserComments,
  getAllComments,
} = require('../services/commentService');

const {
  getAll,
  createMovie,
  getMovieById,
  addMyMovie,
  existingMovie,
  removeFromWatchlist,
  likeMovie,
  dislikeMovie,
  deleteMovie,
  editMovie,
  addWatchlist,
  getUserWatchlist,
  getUserMovies,
} = require('../services/movieService');
const { getUser } = require('../services/userService');

const siteController = require('express').Router();

siteController.post('/movie/create', async (req, res) => {
  try {
    const user = await getUser(req.user._id);
    const data = Object.assign(
      { _ownerId: req.user._id },
      { addedBy: user.username },
      req.body
    );
    const movie = await createMovie(data);
    await addMyMovie(req.user._id, movie._id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.get('/movies', async (req, res) => {
  try {
    const movies = await getAll();
    //   console.log(movies);
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.get('/movies/:id', async (req, res) => {
  try {
    const existing = await existingMovie(req.params.id);

    if (existing == false) {
      throw new Error('Movie doesnt exist!');
    }

    const movie = await getMovieById(req.params.id);

    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.post('/:id/like', hasUser(), async (req, res) => {
  try {
    if (!req.user) {
      throw new Error('Invalid user!');
    }

    if ((await existingMovie(req.params.id)) == false) {
      throw new Error('Movie doesnt exist!');
    }

    const likedMovie = await likeMovie(req.params.id, req.user._id);
    res.status(200).json(likedMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.post('/:id/dislike', hasUser(), async (req, res) => {
  try {
    if (!req.user) {
      throw new Error('Invalid user!');
    }

    if ((await existingMovie(req.params.id)) == false) {
      throw new Error('Movie doesnt exist!');
    }

    const dislikedMovie = await dislikeMovie(req.params.id, req.user._id);
    res.status(200).json(dislikedMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.delete('/:id', hasUser(), async (req, res) => {
  try {
    const movie = await getMovieById(req.params.id);

    for (let userId of movie.bookmarkedUsers) {
      const user = await User.findById(userId);

      if (user.myWatchlist.includes(req.params.id)) {
        user.myWatchlist = user.myWatchlist.filter((id) => id != req.params.id);
      }
      await user.save();
    }

    if (movie._ownerId != req.user?._id) {
      throw new Error('You cannot delete this movie!');
    }

    await deleteMovie(req.params?.id?.toString(), req.user?._id);

    res.status(200).json('deleted');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.put('/:id/edit', hasUser(), async (req, res) => {
  try {
    const movie = await getMovieById(req.params.id);

    if (movie._ownerId != req.user._id) {
      throw new Error('You cannot modify this record!');
    }
    console.log(req.body);
    const newMovie = await editMovie(req.params.id, req.body);
    res.status(200).json(newMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.post('/:id/add', hasUser(), async (req, res) => {
  try {
    const movie = await getMovieById(req.params.id);
    const user = await User.findById(req.user._id);
    if (!req.user) {
      throw new Error('Invalid user!');
    }

    if (user.myWatchlist.includes(movie._id)) {
      throw new Error('Movie is already in your watchlist!');
    }

    if ((await existingMovie(req.params.id)) == false) {
      throw new Error('Movie doesnt exist!');
    }

    if (movie._ownerId == req.user._id) {
      throw new Error('You cannot add your own movie to your watchlist!');
    }

    const updated = await addWatchlist(movie._id, req.user?._id);

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.get('/watchlist', hasUser(), async (req, res) => {
  try {
    const watchlist = await getUserWatchlist(req.user._id);

    res.status(200).json(watchlist);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

siteController.post('/remove/:id', hasUser(), async (req, res) => {
  try {
    const movie = await getMovieById(req.params.id);

    const updated = await removeFromWatchlist(movie._id, req.user._id);

    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

siteController.get('/list', hasUser(), async (req, res) => {
  try {
    const movies = await getUserMovies(req.user._id);
    const movieArr = [];

    for (let id of movies) {
      const movie = await getMovieById(id);
      movieArr.push(movie);
    }

    res.status(200).json(movieArr);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

siteController.post('/:id/comment', hasUser(), async (req, res) => {
  try {
    const user = await getUser(req.user._id);

    const data = Object.assign(
      { _ownerId: req.user._id },
      { _movieId: req.params.id },
      { username: user.username },
      req.body
    );

    const comment = await postComment(data);

    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

siteController.get('/comments', hasUser(), async (req, res) => {
  try {
    const comments = await getAllComments();
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

siteController.get('/user/comments', hasUser(), async (req, res) => {
  try {
    const comments = await getUserComments(req.user._id);
    console.log(comments);
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

module.exports = siteController;
