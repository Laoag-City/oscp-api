const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const OSCPRoutes = require('./routes/OSCPApplicationRoutes');

require('dotenv').config();

const app = express();
app.use(cors())

const port = process.env.PORT || (process.env.NODE_ENV === 'production' ? 3081 : 3001);;
app.use(bodyParser.json());

let mongoUri;

if (process.env.NODE_ENV === 'production') {
  mongoUri = process.env.MONGO_URI_PROD;
} else {
  mongoUri = process.env.MONGO_URI_DEV;
}

mongoose.connect(mongoUri, {
})
.then(()=>{
  console.log(process.env.NODE_ENV);
  console.log('Connected to MongoDB');
})
.catch((err)=>{
  console.error('Error connecting to MongoDB:', err.message)
});

app.use('/users', userRoutes);
app.use('/oscpapplications',  OSCPRoutes)

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
