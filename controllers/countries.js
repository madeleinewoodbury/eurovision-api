const Country = require('../models/Country');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc      Get all countries
// @route     GET /api/v1/countries
// @access    Public
exports.getCountries = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get a single country
// @route     GET /api/v1/countries/:id
// @access    Public
exports.getCountry = asyncHandler(async (req, res, next) => {
  const country = await Country.findById(req.params.id).populate('events');
  if (!country) {
    return next(
      new ErrorResponse(`Country not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: country });
});

// @desc      Create new country
// @route     POST /api/v1/countries
// @access    Private
exports.createCountry = asyncHandler(async (req, res, next) => {
  const country = await Country.create(req.body);
  res.status(200).json({ success: true, data: country });
});

// @desc      Update country
// @route     PUT /api/v1/countries/:id
// @access    Private
exports.updateCountry = asyncHandler(async (req, res, next) => {
  const country = await Country.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: country });
});

// @desc      Delete country
// @route     DELETE /api/v1/countries/:id
// @access    Private
exports.deleteCountry = asyncHandler(async (req, res, next) => {
  const country = await Country.findByIdAndDelete(req.params.id);
  if (!country) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: {} });
});
