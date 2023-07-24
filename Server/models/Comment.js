const { model, Schema, Types } = require('mongoose');

const commentSchema = new Schema({
  content: {
    type: String,
    maxLength: [100, 'Comment cannot exceed 100 charakters!'],
  },
  post: {
    type: Types.ObjectId,
    ref: 'Post',
  },
});

const Comment = new model('Comment', commentSchema);

module.exports = Comment;
