const OSCPApplication = require('../models/OSCPApplicationModel');

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
    const applications = await Application.find({});
    res.status(200).send(applications);
  } catch (error) {
    res.status(500).send({error: 'Failed to getch OSCP applications'});
  }
};

exports.getOSCPApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).send();
    }
    res.status(200).send(application);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateOSCPApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!application) {
      return res.status(404).send();
    }
    res.status(200).send(application);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteOSCPApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);
    if (!application) {
      return res.status(404).send();
    }
    res.status(200).send(application);
  } catch (error) {
    res.status(500).send(error);
  }
};
