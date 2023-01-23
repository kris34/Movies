/* const { model, Schema, Types } = require('mongoose');

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
    minLength: [5, 'Comment cannot be shorter then 5 charakters.'],
  },
  post: {
    type: Types.ObjectId,
    ref: 'Post',
  },
});

const Comment = new model('Comment', commentSchema);

module.exports = Comment;
 */