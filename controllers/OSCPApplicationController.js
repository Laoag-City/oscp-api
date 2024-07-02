const OSCPApplication = require('../models/OSCPApplicationModel');
const Joi = require('joi');

const validateRequestBody = (body) => {
  const signatorySchema = Joi.object({
    signatory: Joi.string().required(),
    status: Joi.string().required(),
    remarks: Joi.string().optional().allow(''),
    signDate: Joi.date().optional().allow(null),
  });

  const schema = Joi.object({
    owner: Joi.string().required(),
    title: Joi.string().required(),
    dateApplied: Joi.date().required(),
    conversionStatus: Joi.boolean().required(),
    cPermitStatus: Joi.boolean().required(),
    cPermitType: Joi.string().optional().allow(''),
    ownerName: Joi.string().required(),
    applicationTitle: Joi.string().required(),
    conversionSignatories: Joi.array().items(signatorySchema).optional(),
    constructionPermitSignatories: Joi.array().items(signatorySchema).min(5).required(),
  });

  const { error } = schema.validate(body);
  return error ? error.details : null;
};


exports.createOSCPApplication = async (req, res) => {
  const validationError = validateRequestBody(req.body);
  if (validationError) {
    return res.status(400).send({ error: 'Invalid request data', details: validationError });
  }

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
    res.status(500).send({ error: 'Failed to fetch OSCP applications' });
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

// For PUT: Complete update
exports.updateOSCPApplication = async (req, res) => {
  const validationError = validateRequestBody(req.body);
  if (validationError) {
    return res.status(400).send({ error: 'Invalid request data', details: validationError });
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
  const validationError = validateRequestBody(req.body);
  if (validationError) {
    return res.status(400).send({ error: 'Invalid request data', details: validationError });
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