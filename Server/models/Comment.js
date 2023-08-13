const { model, Schema, Types } = require('mongoose');

const commentSchema = new Schema({
  content: {
    type: String,
    maxLength: [100, 'Comment cannot exceed 100 charakters!'],
  },
  _movieId: { type: Types.ObjectId, ref: 'Movie', required: true },
  _ownerId: { type: Types.ObjectId, ref: 'User', required: true },
  username: { type: String, required: true },
});

const Comment = new model('Comment', commentSchema);

module.exports = Comment;
