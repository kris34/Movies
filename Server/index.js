const express = require('express');
const mongoose = require('mongoose');
const siteController = require('./controllers/siteController');
const authController = require('./controllers/authController');
const cors = require('./middlewares/cors');
const session = require('./middlewares/session');
const port = '3001';
const DBConnectionString = 'mongodb://localhost:27017/movies2';

start();

function start() {
  const app = express();
  mongoose.connect(DBConnectionString);
  app.use(cors());
  app.use(express.json());
  app.use(session());

  app.get('/', (req, res) => {
    res.json({ message: 'REST service operational' });
  });

  app.use('/api', authController);
  app.use('/api', siteController);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
