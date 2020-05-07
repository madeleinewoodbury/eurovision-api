const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  year: {
    type: Number,
    unique: true,
    required: [true, 'Please add a year'],
  },
  country: {
    type: mongoose.Schema.ObjectId,
    ref: 'Country',
    required: true,
  },
  city: {
    type: String,
    required: [true, 'Please add a city'],
  },
  image: String,
  presenter: String,
  logo: {
    type: String,
    required: [true, 'Please add a logo'],
  },
  bio: String,
  video: {
    type: String,
  },
});

module.exports = mongoose.model('Event', EventSchema);
