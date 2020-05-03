const express = require('express');
const {
  getCountries,
  getCountry,
  createCountry,
  updateCountry,
  deleteCountry,
} = require('../controllers/countries');
const router = express.Router();

// Include other resource routers
const eventRouter = require('./events');
const participantRouter = require('./participants');

const Country = require('../models/Country');
const advancedResults = require('../middleware/advancedResults');

const { protect, authorize } = require('../middleware/auth');

// Re-route into other resource routers
router.use('/:countryId/events', eventRouter);
router.use('/:countryId/participants', participantRouter);

router
  .route('/')
  .get(advancedResults(Country, 'events'), getCountries)
  .post(protect, authorize('admin'), createCountry);
router
  .route('/:id')
  .get(getCountry)
  .put(protect, authorize('admin'), updateCountry)
  .delete(protect, authorize('admin'), deleteCountry);

module.exports = router;
