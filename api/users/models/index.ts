import { Schema, model } from 'mongoose';

const userModel = model('movie', new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    password: String,
  },
}),
);

export {
  userModel,
};
