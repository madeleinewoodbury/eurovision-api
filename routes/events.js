const express = require('express');
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');
const router = express.Router({ mergeParams: true });

const Event = require('../models/Event');
const advancedResults = require('../middleware/advancedResults');

router
  .route('/')
  .get(
    advancedResults(Event, {
      path: 'country',
      select: 'name code',
    }),
    getEvents
  )
  .post(createEvent);
router.route('/:id').get(getEvent).put(updateEvent).delete(deleteEvent);

module.exports = router;
