import { Schema, model } from 'mongoose';

const userModel = model('user', new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}));

export {
  userModel,
};
