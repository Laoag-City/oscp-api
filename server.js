const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const applicationController = require('./applicationController');
const auth = require('./auth');
const userController = require('./userController')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/oscp', {
})
.then(()=>{
  console.log('Connected to MongoDB');
})
.catch((err)=>{
  console.error('Error connecting to MongoDB:', err.message)
});

app.post('/users/register', userController.register);
app.post('/users/login', userController.login);

app.post('/applications', applicationController.createApplication);

//no auth version
//app.get('/applications', applicationController.getApplications);

// Example of a protected route
app.get('/applications', auth, applicationController.getApplications);
app.get('/applications/:id', applicationController.getApplicationById);
app.put('/applications/:id', applicationController.updateApplication);
app.delete('/applications/:id', applicationController.deleteApplication);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
