import { Model, DataTypes } from "sequelize";
import database from "../models/db";

class Funcionario extends Model {
  public id!: number;
  public nomeFuncionario!: string;
  public horasTrabalhadas!: number;
  public turnoTrabalho!: string;
  public categoria!: string;
  public valorHora!: number;
  public salario!: number;
  public alimentacao!: number
}

Funcionario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomeFuncionario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    horasTrabalhadas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valorHora: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    salario: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    alimentacao: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    turnoTrabalho: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "Funcionarios",
  }
);

try {
  Funcionario.sync({ force: true });
  console.log("Tabela Criada Com sucesso");
} catch (error) {
  console.log("Erro ao cirar Tabela: ", error);
}

export default Funcionario;
