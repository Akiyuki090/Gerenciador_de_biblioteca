const { DataTypes } = require("sequelize");
const db = require("../config/conn");

const Book = require("./Books");
const Users = require("./Users");

const options = {
  freezeTableName: true,
  tableName: "Borrowings",
  timestamps: false,
  createdAt: false,
  updatedAt: false,
};

const Borrowings = db.define(
  "Borrowings",
  {
    borrowed_at: {
      type: DataTypes.DATE,
      required: true,
    },

    returned_at: {
      type: DataTypes.DATE,
      required: true,
    },
  },
  options
);

Book.hasOne(Borrowings);
Borrowings.belongsTo(Book);

Users.hasOne(Borrowings);
Borrowings.belongsTo(Users);

module.exports = Borrowings;
