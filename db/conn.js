const { Sequelize } = require("sequelize");
const dotenv = require('dotenv').config()

const sequelize = new Sequelize('biblioteca', `${process.env.user}`, `${process.env.pass}`, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize
