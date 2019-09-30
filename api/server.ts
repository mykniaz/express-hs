import express from 'express';

// Routers
import * as routes from './movie/routes';

// Database
import { Database } from './database';

// Constants
const PORT = process.env.PORT || 8080;
const URI = process.env.MONGO_URI
  || 'mongodb+srv://root-express-hs:root-express-hs@express-hs-db-fmwzu.mongodb.net/data';

const api = express();

const database = new Database(URI);

database.connect()
  .then(() => {
    api.listen(PORT, () => console.log(`Listen port ${PORT}...`));
  })
  .catch((e) => {
    Error(`Database connection error: ${e}`);
  });

api.use('/movies', routes.movieRouter);

export default api;
