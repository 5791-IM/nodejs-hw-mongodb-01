import mongoose from 'mongoose';

import { env } from '../utils/env.js';

export const initMongoConnection = async () => {
  const user = env('MONGODB_USER');
  const password = env('MONGODB_PASSWORD');
  const url = env('MONGODB_URL');
  const dbName = env('MONGODB_DB');

  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`,
    );
    console.log('Connection successfully');
  } catch (error) {
    console.log(error);
    throw error;
  }
};
