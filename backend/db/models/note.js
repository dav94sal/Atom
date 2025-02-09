'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Note.belongsTo(
        models.User,
        { foreignKey: "user_id"}
      )
    }
  }
  Note.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        types(val) {
          const types = [
            "Mental Health", "To-Do", "Reminder"
          ]
          if (!types.includes(val)) {
            throw new Error(
              'Type must be either "Mental Health", "To-Do", or "Reminder"'
            )
          }
        }
      }
    },
    note: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};
