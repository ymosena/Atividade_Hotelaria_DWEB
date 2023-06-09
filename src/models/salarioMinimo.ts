import { Model, DataTypes } from "sequelize";
import database from "../models/db";

class SalarioMinimo extends Model {
  public id!: number;
  public salarioMinimo!: number;
}

SalarioMinimo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    salarioMinimo: {
      type: DataTypes.FLOAT, // Defina o tipo de dado adequado para o salário mínimo
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "SalarioMinimos",
  }
);

try {
  SalarioMinimo.sync({ force: true });
  console.log("Tabela Criada Com sucesso");
} catch (error) {
  console.log("Erro ao cirar Tabela: ", error);
}

export default SalarioMinimo;
