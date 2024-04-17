"use strict";
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
};

const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');

const routes = require('./routes/routes.js');
const errorHandler = require('./middlewares/errorHandler.js')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/", routes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});