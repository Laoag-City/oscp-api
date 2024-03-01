const express = require('express');
const router = express.Router();
const OSCPApplicationController = require('../controllers/OSCPApplicationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, OSCPApplicationController.createOSCPApplication);
router.get('/', authMiddleware, OSCPApplicationController.getOSCPApplications);
router.get('/:id', authMiddleware, OSCPApplicationController.getOSCPApplicationById);
router.put('/:id', authMiddleware, OSCPApplicationController.updateOSCPApplication);
//router.delete('/oscpapplications/:id', auth, applicationController.deleteApplication);

// No authentication 
//router.post('/',s OSCPApplicationController.createOSCPApplication);
//router.get('/', OSCPApplicationController.getOSCPApplications);
//router.get('/:id', OSCPApplicationController.getOSCPApplicationById);
//router.put('/:id', OSCPApplicationController.updateOSCPApplication);
//router.delete('/oscpapplications/:id', auth, applicationController.deleteApplication);

module.exports = router;