const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  owner: String,
  title: String,
  dateApplied: Date,
  signatories: [{ name: String }]
});

module.exports = mongoose.model('Application', ApplicationSchema);
