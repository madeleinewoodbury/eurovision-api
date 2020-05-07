const Participant = require('../models/Participant');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc      Get all participants
// @route     GET /api/v1/participants
// @route     GET /api/v1/countries/:countryId/participants
// @route     GET /api/v1/events/:eventId/participants
// @access    Public
exports.getParticipants = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get a single participant
// @route     GET /api/v1/participantd/:id
// @access    Public
exports.getParticipant = asyncHandler(async (req, res, next) => {
  const participant = await Participant.findById(req.params.id)
    .populate({
      path: 'country',
      select: 'name code altIcon',
    })
    .populate({
      path: 'event',
      select: 'year city',
    });

  if (!participant) {
    return next(
      new ErrorResponse(
        `Participant not found with id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: participant });
});

// @desc      Create new participant
// @route     POST /api/v1/participants
// @access    Private
exports.createParticipant = asyncHandler(async (req, res, next) => {
  const participant = await Participant.create(req.body);
  res.status(200).json({ success: true, data: participant });
});

// @desc      Update participant
// @route     PUT /api/v1/participants/:id
// @access    Private
exports.updateParticipant = asyncHandler(async (req, res, next) => {
  const participant = await Participant.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({ success: true, data: participant });
});

// @desc      Delete participant
// @route     DELETE /api/v1/participants/:id
// @access    Private
exports.deleteParticipant = asyncHandler(async (req, res, next) => {
  const participant = await Participant.findByIdAndDelete(req.params.id);
  if (!participant) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: {} });
});
