const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

const dotenv = require('dotenv');
dotenv.config({ path: "./config/default.env"});

connectDB();

const featuresRouter = require('./routes/featuresRouter');

app.use(cors());
// app.use(express.static(__dirname + "public"));
app.use(express.json());

// Route Handling
app.use('/api/v1/features', featuresRouter);

const SRV_PORT = process.env.SRV_PORT || 3001;

app.listen(SRV_PORT, () => console.log(`Listening on port: ${SRV_PORT}`));