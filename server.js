const https = require("https");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const OSCPRoutes = require("./routes/OSCPApplicationRoutes");
const config = require("./config");
const logger = require("./utils/logger");

//require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/oscpapplications", OSCPRoutes);

// Route for root path '/'
app.get('/', (req, res) => {
  res.send('Laoag City Government OSCP APi Server. Docs at <a href="https://apps.laoagcity.gov.ph/apidocs/oscp">API Docs</a>');
});

// Connect to MongoDB
mongoose.connect(config.mongoUri, {}).then(() => {
  logger.info(`${process.env.NODE_ENV} environment`);
  //logger.info('Connected to MongoDB', { mongoUri: config.mongoUri });
  logger.info('Connected to MongoDB');

  if (process.env.NODE_ENV === 'production') {
    https.createServer(config.tlsOptions, app).listen(config.port, () => {
      logger.info(`Server is up and running on port ${config.port} with TLS`);
    });
  } else {
    app.listen(config.port, () => {
      logger.info(`Server is up and running on port ${config.port}`);
    });
  }
}).catch((err) => {
  logger.error('Error connecting to MongoDB:', { message: err.message, stack: err.stack });
});

// old code
// const port =
//   process.env.PORT || (process.env.NODE_ENV === "production" ? 3081 : 3001);
// app.use(bodyParser.json());

// let mongoUri;

// if (process.env.NODE_ENV === "production") {
//   mongoUri = process.env.MONGO_URI_PROD;
// } else {
//   mongoUri = process.env.MONGO_URI_DEV;
// }

// mongoose
//   .connect(mongoUri, {})
//   .then(() => {
//     console.log(process.env.NODE_ENV);
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err.message);
//   });


//Non https
//app.listen(port, () => {
//  console.log(`Server is up and running on port ${port}`);
//});

//https
// Load TLS certificate and key
// const options = {
//   // key: fs.readFileSync('/etc/letsencrypt/live/your_domain/privkey.pem'),
//   // cert: fs.readFileSync('/etc/letsencrypt/live/your_domain/fullchain.pem')
//   cert: fs.readFileSync("/node-tls/fullchain.pem"),
//   key: fs.readFileSync("/node-tls/privkey.pem"),
// };

// https.createServer(options, app).listen(port, () => {
//   console.log(`Server is up and running on port ${port} with TLS`);
// });
