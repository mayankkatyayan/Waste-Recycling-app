import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: 'string',
    },
    user_name: {
      type: 'string',
      required: true,
      unique: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    quiz_score: {
      type: 'string',
      default: '0',
    },
  },
  {
    timestamps: true,
  }
);
