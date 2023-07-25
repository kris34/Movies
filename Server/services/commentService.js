const Comment = require('../models/Comment');

async function postComment(data) {
  return await Comment.create(data);
}

async function getAllComments() {
  return await Comment.find({});
}

async function getUserComments(userId) {
  const userComments = [];
  const comments = await getAllComments();

  for (let c of comments) {
    if (c.ownerId == userId) {
      userComments.push(c);
    }
  }

  return userComments;
}

async function getMovieComments(movieId) {
  const movieComments = [];
  const comments = await getAllComments();

  for (let c of comments) {
    if (c._movieId == movieId) {
      movieComments.push(c);
    }
  }

  return movieComments;
}

module.exports = {
  postComment,
  getAllComments,
  getUserComments,
  getMovieComments,
};
