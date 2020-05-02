const Country = require('../models/Country');

// @desc      Get all countries
// @route     GET /api/v1/countries
// @access    Public
exports.getCountries = async (req, res, next) => {
  try {
    const countries = await Country.find();
    res.status(200).json({ success: true, data: countries });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc      Get a single country
// @route     GET /api/v1/countries/:id
// @access    Private
exports.getCountry = async (req, res, next) => {
  try {
    const country = await Country.findById(req.params.id);
    if (!country) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: country });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc      Create new country
// @route     POST /api/v1/countries
// @access    Private
exports.createCountry = async (req, res, next) => {
  try {
    const country = await Country.create(req.body);
    res.status(200).json({ success: true, data: country });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc      Update country
// @route     PUT /api/v1/countries/:id
// @access    Private
exports.updateCountry = async (req, res, next) => {
  try {
    const country = await Country.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, data: country });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
};

// @desc      Delete country
// @route     DELETE /api/v1/countries/:id
// @access    Private
exports.deleteCountry = async (req, res, next) => {
  try {
    const country = await Country.findByIdAndDelete(req.params.id);
    if (!country) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
};
