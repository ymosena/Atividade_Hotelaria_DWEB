import database from "../models/db";
import Funcionario from "../models/funcionario";
import { Op } from "sequelize";
import salMinimoServices from "./salMinimoServices";

const databases = database;

class FuncionarioServices {
  async get() {
    await databases.sync();
    const funcionario = await Funcionario.findAll();
    console.log(funcionario);
    const funcionariosDataValues = funcionario.map(
      (funcionario) => funcionario.dataValues
    );
    console.log(funcionariosDataValues);
    return funcionariosDataValues;
  }

  async getPorId(id: number) {
    await databases.sync();
    const funcionario = await Funcionario.findByPk(id);
    console.log(funcionario?.dataValues);

    //const funcionariosDataValues = funcionario.map((funcionario: { dataValues: any; }) => funcionario.dataValues);
    return funcionario;
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
    const funcionariosDataValues = funcionario.map(
      (funcionario) => funcionario.dataValues
    );
    return funcionariosDataValues;
  }

  async post(data: any) {
    await database.sync();

    const salarioMinimo = await salMinimoServices.getPorId();
    let valorHora = 0;

    if (!salarioMinimo) {
      return "ERRO";
    }

    if (data.categoria == "gerente") {
      valorHora = salarioMinimo.salarioMinimo * 0.04;
    } else if (data.turnoTrabalho == "noturno") {
      valorHora = salarioMinimo.salarioMinimo * 0.02;
    } else {
      valorHora = salarioMinimo.salarioMinimo * 0.01;
    }

    const salario = parseInt(data.horasTrabalhadas) * valorHora;
    let alimentacao;
    if (salario <= 800) {
      alimentacao = salario * 0.25;
    } else if (salario <= 1200) {
      alimentacao = salario * 0.2;
    } else {
      alimentacao = salario * 0.15;
    }

    const novoFuncionario = await Funcionario.create({
      nomeFuncionario: data.nomeFuncionario,
      horasTrabalhadas: parseInt(data.horasTrabalhadas),
      turnoTrabalho: data.turnoTrabalho,
      categoria: data.categoria,
      salario: salario,
      valorHora: valorHora,
      alimentacao: alimentacao,
    });
    return novoFuncionario;
  }

  async put(data: any, id: number) {
    await database.sync();

    const salarioMinimo = await salMinimoServices.getPorId();
    let valorHora = 0;

    if (!salarioMinimo) {
      return "ERRO";
    }

    if (data.categoria == "gerente") {
      valorHora = salarioMinimo.salarioMinimo * 0.04;
    } else if (data.turnoTrabalho == "noturno") {
      valorHora = salarioMinimo.salarioMinimo * 0.02;
    } else {
      valorHora = salarioMinimo.salarioMinimo * 0.01;
    }

    const salario = parseInt(data.horasTrabalhadas) * valorHora;
    let alimentacao;
    if (salario <= 800) {
      alimentacao = salario * 0.25;
    } else if (salario <= 1200) {
      alimentacao = salario * 0.2;
    } else {
      alimentacao = salario * 0.15;
    }

    const funcionario = await this.getPorId(id);
    if (funcionario) {
      funcionario.nomeFuncionario = data.nomeFuncionario;
      funcionario.horasTrabalhadas = data.horasTrabalhadas;
      funcionario.turnoTrabalho = data.turnoTrabalho;
      funcionario.categoria = data.categoria;
      funcionario.valorHora = valorHora;
      funcionario.salario = salario;
      funcionario.alimentacao = alimentacao;
    
      const funcionarioAlterado = await funcionario.save();
      return funcionarioAlterado;
    }
    
  }

  async delete(id: number) {
    await database.sync();
    const funcionario = await this.getPorId(id);
    await funcionario?.destroy();
  }
}

export default new FuncionarioServices();
