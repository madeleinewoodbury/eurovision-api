const express = require('express')
const {
  getParticipants,
  getParticipant,
  getWinners,
  createParticipant,
  updateParticipant,
  deleteParticipant,
} = require('../controllers/participants')
const router = express.Router({ mergeParams: true })

const Participant = require('../models/Participant')
const advancedResults = require('../middleware/advancedResults')

const { protect, authorize } = require('../middleware/auth')

router
  .route('/')
  .get(
    advancedResults(
      Participant,
      {
        path: 'country',
        select: 'name code altIcon',
      },
      { path: 'event', select: 'year city' }
    ),
    getParticipants
  )
  .post(protect, authorize('admin'), createParticipant)

router
  .route('/:id')
  .get(getParticipant)
  .put(protect, authorize('admin'), updateParticipant)
  .delete(protect, authorize('admin'), deleteParticipant)

router.route('/winners/list').get(getWinners)

module.exports = router
