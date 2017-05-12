import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

function exec() {
  try {
    mongoose.connect('mongod://localhost/enroll');
    mongoose.connection
      .once('open', () => console.log('Connected to DB...'))
      .on('error', err => console.warn('Warning', err));
  } catch (error) {
    console.log('error', error);
  }
}
