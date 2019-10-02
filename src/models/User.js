const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String
  /* 
    name: String,
    age: Number,
    active: Boolean 
  */
});

modules.exports = mongoose.model('User', UserSchema);
