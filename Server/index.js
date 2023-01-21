const express = require('express');
const mongoose = require('mongoose');
const siteController = require('./controllers/siteController');
const authController = require('./controllers/authController');
const port = '3000';

const connectionString = 'mongodb://localhost:27017/furniture';

start();

function start() {
  mongoose.connect(connectionString);

  const app = express();

  app.use('/users', authController);
  app.use('/site/catalog', siteController);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
