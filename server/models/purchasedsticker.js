'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PurchasedSticker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PurchasedSticker.init({
    userId: DataTypes.INTEGER,
    stickerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PurchasedSticker',
  });
  return PurchasedSticker;
};