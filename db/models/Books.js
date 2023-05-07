const { DataTypes } = require("sequelize");
const db = require("../config/conn");

const options = {
  freezeTableName: true,
  tableName: "Borrowings",
  timestamps: false,
  createdAt: false,
  updatedAt: false,
};

const Book = db.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
      required: true,
    },

    author: {
      type: DataTypes.STRING,
      required: true,
    },

    publisher: {
      type: DataTypes.STRING,
      required: true,
    },

    publication_year: {
      type: DataTypes.DATE,
      required: true,
    },

    copies_available: {
      type: DataTypes.INTEGER,
      required: true,
    },
  },
  options
);

module.exports = Book;
