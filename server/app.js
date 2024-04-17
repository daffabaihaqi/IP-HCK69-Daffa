"use strict";
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
};

const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');

const routes = require('./routes/routes');

app.get("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});