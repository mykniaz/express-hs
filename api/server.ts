import express from 'express';
import { json } from 'body-parser';

// Routers
import { moviesRouter } from './movies/routes';
import { userRouter } from './users/routes';

// Database
import { Database } from './database';

// Constants
const PORT = process.env.PORT || 8080;
const URI = process.env.MONGO_URI
  || 'mongodb+srv://root-express-hs:root-express-hs@express-hs-db-fmwzu.mongodb.net/data';

const app = express();

app.use(json({ type: 'application/*+json' }));

app.use('/', userRouter);
app.use('/movies', moviesRouter);

const database = new Database(URI);

database.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Listen port ${PORT}...`));
  })
  .catch((e) => {
    throw new Error(`Database connection error: ${e}`);
  });
