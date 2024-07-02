const express = require('express');
const router = express.Router();
const OSCPApplicationController = require('../controllers/OSCPApplicationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, OSCPApplicationController.createOSCPApplication);
router.get('/', authMiddleware, OSCPApplicationController.getOSCPApplications);
// TODO: return Permit and Conversion Status only? 
router.get('/:id', OSCPApplicationController.getOSCPApplicationById);

router.put('/:id', authMiddleware, OSCPApplicationController.updateOSCPApplication);
router.patch('/:id', authMiddleware, OSCPApplicationController.patchOSCPApplication);
//router.delete('/oscpapplications/:id', auth, applicationController.deleteApplication);

// No authentication 
//router.post('/', OSCPApplicationController.createOSCPApplication);
//router.get('/', OSCPApplicationController.getOSCPApplications);
//router.get('/:id', OSCPApplicationController.getOSCPApplicationById);
//router.put('/:id', OSCPApplicationController.updateOSCPApplication);
//router.delete('/oscpapplications/:id', auth, applicationController.deleteApplication);

module.exports = router;