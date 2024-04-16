'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PurchasedStickers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : {
            tableName : "Users"
          }, 
          key : 'id'
        }
      },
      stickerId: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : {
            tableName : "Stickers"
          },
          key : "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PurchasedStickers');
  }
};