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

const Country = require('../models/Country');
const advancedResults = require('../middleware/advancedResults');

// Re-route into other resource routers
router.use('/:countryId/events', eventRouter);

router
  .route('/')
  .get(advancedResults(Country, 'events'), getCountries)
  .post(createCountry);
router.route('/:id').get(getCountry).put(updateCountry).delete(deleteCountry);

module.exports = router;
