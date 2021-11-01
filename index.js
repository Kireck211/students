const express = require('express');
require('dotenv').config();

const studentRouter = require('./routes/students');

const app = express();
const { PORT } = process.env;

app.use(express.json());

app.use('/students', studentRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));