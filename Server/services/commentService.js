const Comment = require('../models/Comment');

async function postComment(data) {
  return await Comment.create(data);
}



module.exports = { 
    postComment
}