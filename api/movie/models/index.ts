import { Schema, model } from 'mongoose';

const movieModel = model('movie', new Schema({
  name: {
    type: String,
    required: true,
  },
}),
);

export {
  movieModel,
};
