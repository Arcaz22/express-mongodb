require('dotenv').config(); 
const connect = require('./config/db');

const express = require('express');
const router = require('./routes/index');
const app = express();

const port = process.env.PORT;

connect();
app.use(express.json());
app.use(router);

app.listen(port, console.log(`Server is running on port ${port}`));
