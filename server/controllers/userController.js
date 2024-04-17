
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
            next(error);
        };
    };

    static async loginUser(req, res, next) {
        try {
            const {email, password} = req.body;

            if (!email || !password) {
                throw {name : "Invalid Input"}
            }

            const user = await User.findOne({
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
            next(error);
        }
    };

    static async updateProfile(req, res, next) {
        try {
            const userId = req.user.id;
            const {firstName, lastName, profilePicture} = req.body;

            // if (!firstName || !lastName || !profilePicture) {
            //     throw {name : "Invalid Input"}
            // };

            const user = await User.findByPk(userId);

            if (!user) {
                throw {name : "Not Found"}
            }

            const updated = await user.update(req.body);

            res.status(200).json({
                message : "Berhasil mengupdate user",
                data : {
                    id : updated.id,
                    email : updated.email,
                    firstName : updated.firstName,
                    lastName : updated.lastName
                }
            })
        } catch (error) {
            next(error);
        }
    };
};

module.exports = userController;