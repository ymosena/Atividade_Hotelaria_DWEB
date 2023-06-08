import database from "../models/db";
import SalarioMinimo from "../models/salarioMinimo";

const databases = database


class SalMinimoServices {

    async getPorId(id: number) {
        await databases.sync()
        const salarioMinimo = await SalarioMinimo.findByPk(id)
        return salarioMinimo
    }

    async post(data: any) {
        await databases.sync();
        const salarioMinimo = await SalarioMinimo.create({
            salarioMinimo: data.salarioMinimo,
        });
        return salarioMinimo
    }

    async put(salarioMinimo: number) {
        await databases.sync()
        const salarioMinimoT = await this.getPorId(1)
        if (salarioMinimoT) {
            salarioMinimoT.salarioMinimo = salarioMinimo
            salarioMinimoT.save()
            return salarioMinimoT
        }
    }

}

export default new SalMinimoServices();