import { Model, DataTypes } from 'sequelize';
import database from '../models/db';

class Funcionario extends Model {
  public id!: number;
  public nomeFuncionario!: string;
  public horasTrabalhadas!: number;
  public turnoTrabalho!: string;
  public categoria!: string;
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
    modelName: 'Funcionario',
  }
);

export default Funcionario;
