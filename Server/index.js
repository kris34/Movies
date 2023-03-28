const express = require('express');
const mongoose = require('mongoose');
const siteController = require('./controllers/siteController');
const authController = require('./controllers/authController');
const cors = require('./middlewares/cors');
const session = require('./middlewares/session');
const port = '3001';
const cookieParser = require('cookie-parser');
const DBConnectionString = 'mongodb://localhost:27017/movies2';

start();

function start() {
  mongoose.connect(DBConnectionString);

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(session());
  app.use(cookieParser());

  app.get('/', (req, res) => {
    res.json({ message: 'REST service operational' });
  });

  app.use('/api', authController);
  app.use('/api', siteController);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
