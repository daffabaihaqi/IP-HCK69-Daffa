'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Message.belongsTo(models.User, {foreignKey : "senderId"});
      Message.belongsTo(models.Sticker, {foreignKey : "stickerId"});
    }
  }
  Message.init({
    senderId: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Sender ID can't be empty"
        }, 
        notEmpty : {
          msg : "Sender ID can't be empty"
        }
      }
    },
    message: {
      type : DataTypes.TEXT,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Message can't be empty"
        }, 
        notEmpty : {
          msg : "Message can't be empty"
        }
      }
    },
    stickerId: {
      type : DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};