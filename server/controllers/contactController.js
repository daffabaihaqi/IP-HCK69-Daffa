
const { Contact,User } = require('../models');

class contactController {
    static async displayContacts(req, res, next) {
        try {
            const userId = req.user.id;

            const contacts = await Contact.findAll({
                where : {
                    userId
                },
                include : {
                    model : User
                }
            });

            res.status(200).json({
                contacts
            });
        } catch (error) {
            next(error);
        };
    };

    static async addNewContact(req, res, next) {
        try {
            const userId = req.user.id;
            const {friendId} = req.body;

            const friend = await User.findByPk(friendId);

            if (!friend) {
                throw {name : "Not Found"}
            };

            if (friendId === userId) {
                throw {name : "Input Not Allowed"}
            }

            const isFriend = await Contact.findOne({
                where : {
                    userId,
                    friendId
                }
            });

            if (isFriend) {
                throw {name : "Input Not Allowed"}
            }

            const newContact = await Contact.create({
                userId,
                friendId
            });

            res.status(201).json({
                message : "Contact succesfully added",
                data : newContact
            });
        } catch (error) {
            next(error);
        }
    }

    static async displayPerContact(req, res, next) {
        try {
            const userId = req.user.id;
            const friendId = req.params.id;

            const contact = await Contact.findOne({
                where : {
                    userId,
                    friendId
                }
            });

            res.status(200).json({
                contact
            })
        } catch (error) {
            next(error);
        };
    };

    static async changeContactName(req, res, next) {
        try {
            const userId = req.user.id;
            const friendId = req.params.id;
            const {alias} = req.body;

            const contact = await Contact.findOne({
                where : {
                    userId,
                    friendId
                }
            });

            if (!contact) {
                throw {name : "Not Found"}
            };

            const updatedContact = await contact.update({alias});

            res.status(200).json({
                message : "Contact name updated",
                friend : updatedContact
            });
        } catch (error) {
            next(error);
        }
    }
};

module.exports = contactController;