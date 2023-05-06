const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Users = db.define("Users", {

    name: {
        type: DataTypes.STRING,
        required: true,
    },
    
    email: {
        type: DataTypes.STRING,
        required: true
    },

    phone: {
        type: DataTypes.STRING,
        required: true
    },

});

module.exports = Users;
