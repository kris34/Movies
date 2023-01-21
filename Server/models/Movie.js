const { model, Schema, Types } = require('mongoose');

const IMAGE_REGEX = /^https?:\/\/.+$/i;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [2, 'Title should be at least 2 charakters long!'],
  },
  year: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => {
        value <= 1900 && value >= 2030;
      },
      message: 'Year cannot be lower then 1900 and higher then 2030!',
    },
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        IMAGE_REGEX.text(value);
      },
      message: 'Invalid Image URl!',
    },
  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Description should be at least 10 charakters long!'],
  },
  directors: {
    type: [String],
    required: true,
    minLength: [1, 'You cannot add less then 1 Director!'],
  },
  ratings: { type: [Types.ObjectId], ref: 'User', default: [] },
});

const Movie = new model('Movie', movieSchema);

module.exports = Movie
