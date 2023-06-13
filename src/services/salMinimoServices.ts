import database from "../models/db";
import SalarioMinimo from "../models/salarioMinimo";

const databases = database;

class SalMinimoServices {
  async getPorId() {
    await databases.sync();
    const salarioMinimo = await SalarioMinimo.findByPk(1);
    return salarioMinimo;
  }

  async post(data: any) {
    await databases.sync();
    const salarioMinimo = await SalarioMinimo.create({
      salarioMinimo: data.salarioMinimo,
    });
    return salarioMinimo;
  }

  async put(salarioMinimoParametro: number) {
    await databases.sync();

    const salarioMinimoT = await this.getPorId(); // Não é necessário passar o ID como parâmetro
    if (salarioMinimoT) {
      salarioMinimoT.salarioMinimo = salarioMinimoParametro;
      const salarioMinimoAtualizado = await salarioMinimoT.save();
      return salarioMinimoAtualizado;
    } else {
      const salarioMinimoCriado = await SalarioMinimo.create({
        salarioMinimo: salarioMinimoParametro,
      });
      return salarioMinimoCriado;
    }
  }
}

export default new SalMinimoServices();
