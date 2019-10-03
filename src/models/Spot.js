const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  }
});

module.exports = mongoose.model('Spot', SpotSchema);