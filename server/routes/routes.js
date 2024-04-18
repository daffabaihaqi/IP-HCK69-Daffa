"use strict"
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const contactController = require('../controllers/contactController');
const authentication = require('../middlewares/authentication');

router.get("/", (req, res) => {
    res.status(200).json({
        message : "Masukk"
    })
});

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

router.use(authentication);

router.put("/update-profile", userController.updateProfile);

router.get("/contacts", contactController.displayContacts);

router.post("/contacts", contactController.addNewContact);

router.get("/contacts/:id", contactController.displayPerContact);

router.patch("/contacts/:id", contactController.changeContactName);

router.get("/messages/:id", (req, res) => {

});

router.post("/messages/:id", (req, res) => {

});


module.exports = router;