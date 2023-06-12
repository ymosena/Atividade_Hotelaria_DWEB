import { Request, Response } from "express";
import salMinimoServices from "../services/salMinimoServices";

class SalMinimo {
  get(req: Request, res: Response) {
    const { id } = req.params;
    const salarioMinimo = salMinimoServices.getPorId(parseInt(id));
    return res.render('salario', { data: salarioMinimo });
  }

  post(req: Request, res: Response) {
    const data = req.body;
    const salarioMinimo = salMinimoServices.post(data);

    return res.render('salario',{ data: salarioMinimo });
  }

  put(req: Request, res: Response) {
    const data = req.body;
    const salarioMinimo = salMinimoServices.put(data);
    return res.render('salario',{ data: salarioMinimo });
  }
}

export default new SalMinimo();
