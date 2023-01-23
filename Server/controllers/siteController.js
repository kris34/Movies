const User = require('../models/User');
const {
  getAll,
  createMovie,
  getMovieById,
  addMyMovie,
  existingMovie,
  likeMovie,
} = require('../services/movieService');

const siteController = require('express').Router();

siteController.post('/', async (req, res) => {
  try {
    const data = Object.assign({ _ownerId: req.user._id }, req.body);
    const movie = await createMovie(data);

    await addMyMovie(req.user._id, movie._id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.get('/', async (req, res) => {
  try {
    const movies = await getAll();
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.get('/:id', async (req, res) => {
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

siteController.get('/:id/like', async (req, res) => {
  try {
    const existing = await existingMovie(req.params.id);

    if (existing == false) {
      throw new Error('Movie doesnt exist!');
    }

    const user = await User.findById(req.user?._id);
    
    if (user.likedMovies.includes(req.params.id) == true) {
      throw new Error('You cannot like the same movie twice!');
    }

    await likeMovie(req.params.id, req.user._id);
    const movie = await getMovieById(req.params.id);

    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = siteController;
