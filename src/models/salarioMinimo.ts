import { DataTypes } from "sequelize";
import database from "./db";

const SalarioMinimo = database.define("salarioMinimo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  salarioMinimo: {
    type: DataTypes.DOUBLE,
  },
});

(async () => {
  try {
    await SalarioMinimo.sync({ force: true });
    console.log("Tabela criada com sucesso.");
  } catch (erro) {
    console.log("Erro ao criar tabela:", erro);
  }
})();

export default SalarioMinimo;
