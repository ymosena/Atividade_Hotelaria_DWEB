import { DataTypes } from "sequelize";
import database from "./db";

const Funcionario = database.define("funcionario", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nomeFuncioario: {
    type: DataTypes.STRING,
  },
  horasTrabalhadas: {
    type: DataTypes.INTEGER,
  },
  turnoTrabalho: {
    type: DataTypes.STRING,
  },
  categoria: {
    type: DataTypes.STRING,
  },
});

(async () => {
  try {
    await Funcionario.sync({ force: true });
    console.log("Tabela criada com sucesso.");
  } catch (erro) {
    console.log("Erro ao criar tabela:", erro);
  }
})();

export default Funcionario;
