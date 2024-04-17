"use strict"
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get("/", (req, res) => {

});

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

router.put("/update-profile", userController.updateProfile);

router.get("/contacts", (req, res) => {

});

router.get("/contacts/:id", (req, res) => {

});

router.patch("/contacts/:id", (req, res) => {

});

router.get("/messages", (req, res) => {

});

router.post("/messages", (req, res) => {

});


module.exports = router;