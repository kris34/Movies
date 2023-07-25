const Comment = require('../models/Comment');
const User = require('../models/User');
const { getMovieById } = require('./movieService');

async function postComment(data) {
  return await Comment.create(data);
}

module.exports = {
  postComment,
};
