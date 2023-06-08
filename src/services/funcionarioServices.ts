import database from "../models/db";
import Funcionario from "../models/funcionario";
import { Op } from 'sequelize';



const databases = database

class FuncionarioServices {

    async get() {
        await databases.sync()
        const funcionario = await Funcionario.findAll()
        return funcionario
    }

    async getPorId(id: number) {
        await databases.sync()
        const funcionario = await Funcionario.findByPk(id)
        return funcionario
    }


    async getPorNome(nome: string) {
        await database.sync();
        const funcionario = await Funcionario.findAll({
            where: {
                nomeFuncionario: {
                    [Op.like]: `%${nome}%`, // Realiza uma busca "LIKE" para nomes que contenham o valor fornecido
                },
            },
        });
        return funcionario;
    }

    async post(data: any) {
        await database.sync();

        const novoFuncionario = await Funcionario.create({
            nomeFuncionario: data.nomeFuncionario,
            horasTrabalhadas: data.horasTrabalhadas,
            turnoTrabalho: data.turnoTrabalho,
            categoria: data.categoria,
        });
        return novoFuncionario
    }

    async put(data: any, id: number) {
        const funcionario = await this.getPorId(id);
        if (funcionario) {
            funcionario.nomeFuncionario = data.nomeFuncionario
            funcionario.horasTrabalhadas = data.horasTrabalhadas
            funcionario.turnoTrabalho = data.turnoTrabalho
            funcionario.categoria = data.categoria

            const funcionarioAlterado = funcionario.save()
            return funcionarioAlterado
        }
    }

    async delete(id: number) {
        const funcionario = await this.getPorId(id);
        funcionario?.destroy();
    }

}

export default new FuncionarioServices();