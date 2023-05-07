const { DataTypes } = require("sequelize");
const db = require("../config/conn");

const options = {
  freezeTableName: true,
  tableName: "Borrowings",
  timestamps: false,
  createdAt: false,
  updatedAt: false,
};

const Users = db.define(
  "Users",
  {
    name: {
      type: DataTypes.STRING,
      required: true,
    },

    email: {
      type: DataTypes.STRING,
      required: true,
    },

    phone: {
      type: DataTypes.STRING,
      required: true,
    },
  },
  options
);

module.exports = Users;
