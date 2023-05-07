const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: '../.env' });

const sequelize = new Sequelize("biblioteca2", `${process.env.user}`, `${process.env.pass}`, {
  host: "localhost",
  dialect: "mysql",
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso.");
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
}

connect();

module.exports = sequelize;
