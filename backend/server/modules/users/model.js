import mongoose, { Schema } from 'mongoose';
import { hash, compare } from 'bcrypt';

const UserSchema = new Schema({
  local: {
    email: String,
    password: String
  }
});

UserSchema.pre('save', function(next) {
  // check if pw is new or update one so we don't touch it
  if (!this.isModified('local.password')) { return next(); }
  //number of rounds to salt pw
  const SALT_ROUNDS = 10;

  //hash the pw
  hash(this.local.password, SALT_ROUNDS, (err, hashPassword) => {
    if (err) { return cb(err); }

    //make local.pw the result of hash
    this.local.password = hashPassword;
    next();
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  //compare pw from the front-end and check if it matches the encrypted pw
  compare(candidatePassword, this.local.password, (err, isMatch) => {
    if (err) { return cb(err); }

    //return no error and the match
    cb(null, isMatch);
  });
};
