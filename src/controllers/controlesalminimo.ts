import { Request, Response } from "express";
import salMinimoServices from "../services/salMinimoServices";

class SalMinimo {
  async get(req: Request, res: Response) {
    const salarioMinimo = await salMinimoServices.getPorId();
    if (salarioMinimo) {
      return res.render('salario', { data: salarioMinimo });

    } else {
      return res.render('salario', { data: { salarioMinimo: 0 } });
    }
  }

  post(req: Request, res: Response) {
    const data = req.body;
    const salarioMinimo = salMinimoServices.post(data);

    return res.render('salario',{ data: salarioMinimo });
  }

 async put(req: Request, res: Response) {
    const data = req.body;
    const salarioMinimo = await salMinimoServices.put(parseFloat(data.salario));
    return res.render('salario',{ data: salarioMinimo });
  }
}

export default new SalMinimo();
