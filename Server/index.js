const express = require('express');
const mongoose = require('mongoose');
const siteController = require('./controllers/siteController');
const authController = require('./controllers/authController');
const cors = require('./middlewares/cors');
const session = require('./middlewares/session');
const dotenv = require('dotenv');
const port = '3000';
const cookieParser = require('cookie-parser');
const DBConnectionString = `mongodb+srv://kris:kasi4kata9@movies.hwvqfuh.mongodb.net/?retryWrites=true&w=majority`;

const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(DBConnectionString, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


start();

function start() {
  dotenv.config();

  run().catch(console.dir);
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
