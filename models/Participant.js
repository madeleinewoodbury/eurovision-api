const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: [true, 'Please add an artist'],
  },
  song: {
    type: String,
    required: [true, 'Please add a song'],
  },
  country: {
    type: mongoose.Schema.ObjectId,
    ref: 'Country',
    required: true,
  },
  event: {
    type: mongoose.Schema.ObjectId,
    ref: 'Event',
    required: true,
  },
  final: {
    type: Boolean,
    required: true,
  },
  startNr: {
    type: Number,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  winner: {
    type: Boolean,
    default: false,
  },
  image: String,
  bio: String,
  video: {
    type: String,
  },
});

module.exports = mongoose.model('Participant', ParticipantSchema);
