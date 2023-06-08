import { Sequelize } from "sequelize";

const database = new Sequelize("AtvWeb", "root", "mcs2809", {
  host: "localhost",
  dialect: "mysql",
});

database
  .authenticate()
  .then(() => {
    console.log("Conexão bem Sucedida");
  })
  .catch((err) => {
    console.log("Erro ao conectar:", err);
  });

export default database;
