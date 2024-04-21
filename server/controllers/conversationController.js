const { Conversation, Message, User, Participants } = require("../models");
const { Op } = require("sequelize");

class conversationController {
  static async displayConversations(req, res, next) {
    try {
      const UserId = req.user.id;

      // const conversations = await Conversation.findAll({
      //     include : {
      //         model : User,
      //         where: {
      //             id: UserId
      //         },
      //         // include: {
      //         //     // model: Participants
      //         // }
      //     }
      //     // include : {
      //     //     model : Participants,
      //     //     include : {
      //     //         model : User
      //     //     }
      //     // }
      // });

      const conversations = await Participants.findAll({
        where: {
          UserId,
        },
        include: {
          model: Conversation,
          include: [
            {
              model: Participants,
              as: "parti",
              include: [
                {
                  model: User,
                  where: {
                    id: {
                      [Op.not]: UserId,
                    },
                  },
                },
              ],
            },
          ],
        },
      });

      let user_list = [];

      conversations.forEach((participan) => {
        console.log(participan);
        participan.Conversation.parti.forEach((p) => {
          let { firstName, lastName, profilePicture } = p.User;
          user_list.push({ firstName, lastName, profilePicture });
        });
      });

      // let conversations = await Conversation.findAll({
      //     include: {
      //         model: Participants,
      //         as: "parti"
      //     }
      // })

      res.status(200).json({
        user_list,
        conversations,
      });
    } catch (error) {
      next(error);
    }
  }

  static async displayPerConversation(req, res, next) {
    try {
      const ConversationId = req.params.id;

      const conversation = await Conversation.findByPk(ConversationId, {
        include: [
          {
            model: Participants,
          },
          {
            model: Message,
          },
        ],
      });

      res.status(200).json({
        conversation,
      });
    } catch (error) {
      next(error);
    }
  }

  static async addConversation(req, res, next) {
    try {
        
    } catch (error) {
      next(error);
    }
  }
}

module.exports = conversationController;
