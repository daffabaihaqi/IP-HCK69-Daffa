
const { Conversation, User, Participants } = require('../models');

class conversationController {

    static async displayConversations(req, res, next) {
        try {
            const UserId = req.user.id;

            const conversations = await Conversation.findAll({
                where : {
                    Participants : {
                        UserId : req.user.id
                    }
                },
                include : {
                    model : Participants
                }
            })
        } catch (error) {
            next(error);
        };
    };

    static async displayPerConversation(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        };
    };

    static async addConversation(req, res, next) {
        try {
            
        } catch (error) {
            next(error)
        }
    };
};

module.exports = conversationController;