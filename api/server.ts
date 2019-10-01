import express from 'express';
import { json } from 'body-parser';

// Routers
import { moviesRouter } from './movies/routes';

// Database
import { Database } from './database';

// Constants
const PORT = process.env.PORT || 8080;
const URI = process.env.MONGO_URI
  || 'mongodb+srv://root-express-hs:root-express-hs@express-hs-db-fmwzu.mongodb.net/data';

const api = express();

api.use(json({ type: 'application/*+json' }));

api.use('/movies', moviesRouter);
api.use('/users', moviesRouter);

const database = new Database(URI);

database.connect()
  .then(() => {
    api.listen(PORT, () => console.log(`Listen port ${PORT}...`));
  })
  .catch((e) => {
    throw new Error(`Database connection error: ${e}`);
  });
