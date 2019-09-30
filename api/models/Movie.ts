import { Schema, model } from 'mongoose';

const movieModel = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default model('Movie', movieModel);
