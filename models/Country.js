const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters'],
  },
  capital: {
    type: String,
    required: [true, 'Please add a capital'],
    trim: true,
    maxlength: [50, 'Capital can not be more than 50 characters'],
  },
  code: {
    type: String,
    required: [true, 'Please add a country code'],
    unique: true,
    trim: true,
    maxlength: [2, 'Code can not be more than 2 characters'],
  },
  flag: {
    type: String,
    required: [true, 'Please add a country code'],
  },
  image: String,
  bio: String,
  firstParticipation: {
    type: Number,
    required: true,
  },
  victories: {
    type: Number,
    required: true,
  },
  hosted: {
    type: Number,
    required: true,
  },
  video: {
    type: String,
  },
});

module.exports = mongoose.model('Country', CountrySchema);
