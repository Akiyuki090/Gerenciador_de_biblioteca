const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Book = db.define("Book", {

    title: {
        type: DataTypes.STRING,
        required: true,
    },
    
    author: {
        type: DataTypes.STRING,
        required: true
    },

    publisher: {
        type: DataTypes.STRING,
        required: true
    },

    publication_year: {
        type: DataTypes.DATE,
        required: true
    },

    copies_available: {
        type: DataTypes.INTEGER,
        required: true
    }
});

module.exports = Book;
