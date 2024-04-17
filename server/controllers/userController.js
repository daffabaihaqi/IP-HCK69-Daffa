
const { validatePassword } = require('../helper/bcrypt');
const { createToken } = require('../helper/jwt');
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
        try {
            const {email, password} = req.body;

            if (!email || !password) {
                throw {name : "Invalid Input"}
            }

            const user = User.findOne({
                where : {
                    email
                }
            });

            if (!user) {
                throw {name : "Invalid User"}
            };

            let isValidPassword = validatePassword(password, user.password);

            if (!isValidPassword) {
                throw {name : "Invalid User"}
            };

            const token = createToken({
                id : user.id
            });

            res.status(200).json({
                token,
                email : user.email,
            });
        } catch (error) {
            console.log(error);
        }
    };

    static async updateProfile(req, res, next) {

    };
};

module.exports = userController;