import { Sequelize } from "sequelize";

const sequelize = new Sequelize('crud', 'root', 'mcs2809', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Conexão bem Sucedida")
}).catch(err => {
    console.log("Erro ao conectar", err)
})

export default sequelize; 