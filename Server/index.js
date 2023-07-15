const express = require('express');
const mongoose = require('mongoose');
const siteController = require('./controllers/siteController');
const authController = require('./controllers/authController');
const cors = require('./middlewares/cors');
const session = require('./middlewares/session');
const port = '3000';
const cookieParser = require('cookie-parser');
const DBConnectionString = `mongodb+srv://kris:kasi4kata9@movies.hwvqfuh.mongodb.net/?retryWrites=true&w=majority`;

start();

function start() {
  mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    (err) => {
     if(err) console.log(err) 
     else console.log("mongdb is connected");
    }
  );

  const app = express();

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
