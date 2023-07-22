const { hasUser } = require('../middlewares/guards');
const User = require('../models/User');

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
} = require('../services/movieService');
const { getUser } = require('../services/userService');

const siteController = require('express').Router();

siteController.post('/movie/create', async (req, res) => {
  try {
    const data = Object.assign({ _ownerId: req.user._id }, req.body);
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

    await removeFromWatchlist(req.params.id);

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

    const addedMovie = await addWatchlist(movie._id, req.user?._id);

    res.status(200).json(addedMovie);
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

    await removeFromWatchlist(movie._id, req.user._id);

    res.status(200).json('removed from watchlist');
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

module.exports = siteController;
