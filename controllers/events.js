const Event = require('../models/Event');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc      Get all events
// @route     GET /api/v1/events
// @route     GET /api/v1/countries/:countryId/events
// @access    Public
exports.getEvents = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get a single event
// @route     GET /api/v1/events/:id
// @access    Public
exports.getEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.id).populate({
    path: 'country',
    select: 'name code',
  });

  if (!event) {
    return next(
      new ErrorResponse(`Event not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: event });
});

// @desc      Create new event
// @route     POST /api/v1/events
// @access    Private
exports.createEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.create(req.body);
  res.status(200).json({ success: true, data: event });
});

// @desc      Update event
// @route     PUT /api/v1/events/:id
// @access    Private
exports.updateEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: event });
});

// @desc      Delete event
// @route     DELETE /api/v1/events/:id
// @access    Private
exports.deleteEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  if (!event) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: {} });
});
