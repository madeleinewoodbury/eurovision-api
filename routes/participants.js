const express = require('express');
const {
  getParticipants,
  getParticipant,
  createParticipant,
  updateParticipant,
  deleteParticipant,
} = require('../controllers/participants');
const router = express.Router({ mergeParams: true });

const Participant = require('../models/Participant');
const advancedResults = require('../middleware/advancedResults');

router
  .route('/')
  .get(
    advancedResults(
      Participant,
      {
        path: 'country',
        select: 'name code',
      },
      { path: 'event', select: 'year city' }
    ),
    getParticipants
  )
  .post(createParticipant);

router
  .route('/:id')
  .get(getParticipant)
  .put(updateParticipant)
  .delete(deleteParticipant);

module.exports = router;
