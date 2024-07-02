const OSCPApplication = require('../models/OSCPApplicationModel');

const validateRequestBody = (body) => {
  // Add your validation logic here
  // For example, using a library like Joi or express-validator
  return true; // or false if validation fails
};

exports.createOSCPApplication = async (req, res) => {
  try {
    const oscpapplication = new OSCPApplication(req.body);
    await oscpapplication.save();
    res.status(201).send(oscpapplication);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getOSCPApplications = async (req, res) => {
  try {
    const oscpapplications = await OSCPApplication.find({});
    res.status(200).send(oscpapplications);
  } catch (error) {
    res.status(500).send({error: 'Failed to fetch OSCP applications'});
  }
};

exports.getOSCPApplicationById = async (req, res) => {
  try {
    const oscpapplication = await OSCPApplication.findById(req.params.id);
    if (!oscpapplication) {
      return res.status(404).send();
    }
    res.status(200).send(oscpapplication);
  } catch (error) {
    res.status(500).send(error);
  }
};

//replace
exports.updateOSCPApplication = async (req, res) => {
  try {
    const oscpapplication = await OSCPApplication.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!oscpapplication) {
      return res.status(404).send();
    }
    res.status(200).send(oscpapplication);
  } catch (error) {
    res.status(400).send(error);
  }
};

// For PUT: Complete update
exports.updateOSCPApplication = async (req, res) => {
  if (!validateRequestBody(req.body)) {
    return res.status(400).send({ error: 'Invalid request data' });
  }
  
  try {
    const oscpapplication = await OSCPApplication.findByIdAndUpdate(req.params.id, req.body, { new: true, overwrite: true });
    if (!oscpapplication) {
      return res.status(404).send({ error: 'OSCPApplication not found' });
    }
    res.status(200).send(oscpapplication);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error', details: error.message });
  }
};

// For PATCH: Partial update
exports.patchOSCPApplication = async (req, res) => {
  if (!validateRequestBody(req.body)) {
    return res.status(400).send({ error: 'Invalid request data' });
  }
  
  try {
    const oscpapplication = await OSCPApplication.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!oscpapplication) {
      return res.status(404).send({ error: 'OSCPApplication not found' });
    }
    res.status(200).send(oscpapplication);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error', details: error.message });
  }
};