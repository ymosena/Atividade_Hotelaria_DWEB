import { Sequelize } from "sequelize";
import  database  from "./db"

const Funcionario = database.define("funcionaro", {
    id: {
        type: DataTypes.INTEGER, // Aqui você pode especificar o tipo do ID
        autoIncrement: true,
        primaryKey: true,
      },
})


export default Funcionario;
