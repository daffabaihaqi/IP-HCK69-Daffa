const {User, Conversation, Participants} = require('./models');

async function fetchConversation() {
    try {
        const conversations = await Conversation.findAll({
            include : {
                model : Participants,
                where : {
                    UserId : 2
                }
            }
        });

        console.log(conversations);
    } catch (error) {
        console.log(error);
    }
};

// async function fetchConversation() {
//     try {
//       const data = await Conversation.findAll({
//         include: {
//           model: Participants,
//           where: { UserId: 2 }, // Filter Participants by user ID
//           include: {
//             model: User, // Include User model
//           }
//         }
//       });
  
//       const conversationsWithParticipants = data.map(conversation => ({
//         ...conversation, // Include conversation details
//         participants: conversation.Participants.map(participant => participant.User) // Extract and map User objects from participants
//       }));
  
//       console.log(conversationsWithParticipants); // This will show conversations with participating users
//     } catch (error) {
//       console.log(error);
//     }
//   }
  

fetchConversation();