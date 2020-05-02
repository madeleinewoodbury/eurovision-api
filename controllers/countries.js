// @desc      Get all countries
// @route     GET /api/v1/countries
// @access    Public
exports.getCountries = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all countries' });
};

// @desc      Get a single country
// @route     GET /api/v1/countries/:id
// @access    Private
exports.getCountry = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show single country' });
};

// @desc      Create new country
// @route     POST /api/v1/countries
// @access    Private
exports.createCountry = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create country' });
};

// @desc      Update country
// @route     PUT /api/v1/countries/:id
// @access    Private
exports.updateCountry = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Update country' });
};

// @desc      Delete country
// @route     DELETE /api/v1/countries/:id
// @access    Private
exports.deleteCountry = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Delete country' });
};
