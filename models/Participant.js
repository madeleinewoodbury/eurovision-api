const mongoose = require('mongoose')

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
  semifinal: Number,
  semiStartNr: Number,
  semiPoints: Number,
  semiPlace: String,
  startNr: {
    type: Number,
    default: 0,
  },
  points: {
    type: Number,
    default: 0,
  },
  winner: {
    type: Boolean,
    default: false,
  },
  place: {
    type: String,
    default: '00',
  },
  image: String,
  bio: Array,
  video: {
    type: String,
  },
})

module.exports = mongoose.model('Participant', ParticipantSchema)
