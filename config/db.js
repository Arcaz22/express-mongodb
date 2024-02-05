const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const db = async () => {
  try {
    const connect = await mongoose.connect( MONGO_URI )
    console.log('mongodb connected');
  } catch (error) {
    console.error(error);
  }
}

module.exports = db;
