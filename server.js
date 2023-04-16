require("dotenv").config
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());

const contactRouter = require('./route/contactRoute');
app.use('/', contactRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`backend server listening to port 4000`);
})