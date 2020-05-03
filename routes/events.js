const express = require('express');
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');
const router = express.Router({ mergeParams: true });

// Include other resource routers
const participantRouter = require('./participants');

const Event = require('../models/Event');
const advancedResults = require('../middleware/advancedResults');

// Re-route into other resource routers
router.use('/:eventId/participants', participantRouter);

const { protect } = require('../middleware/auth');

router
  .route('/')
  .get(
    advancedResults(Event, {
      path: 'country',
      select: 'name code',
    }),
    getEvents
  )
  .post(protect, createEvent);
router
  .route('/:id')
  .get(getEvent)
  .put(protect, updateEvent)
  .delete(protect, deleteEvent);

module.exports = router;
