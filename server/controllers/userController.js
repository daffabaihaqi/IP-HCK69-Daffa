
const {User} = require('../models');

class userController {
    static async registerUser(req, res, next) {
        try {
            const {email, password, firstName, lastName, profilePicture} = req.body;

            const newUser = await User.create({email, password, firstName, lastName, profilePicture});

            res.status(201).json({
                message : "User succesfully added",
                data : {id : newUser.id, email : newUser.email}
            });
        } catch (error) {
            console.log(error);
        };
    };

    static async loginUser(req, res, next) {

    };

    static async updateProfile(req, res, next) {

    };
};

module.exports = userController;