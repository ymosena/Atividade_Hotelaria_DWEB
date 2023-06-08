import { Request, Response } from "express";
import salMinimoServices from "../services/salMinimoServices";

class SalMinimo{

    get(req: Request, res: Response) {
        const { id } = req.params
        const salarioMinimo = salMinimoServices.getPorId(parseInt(id))
        return res.json(salarioMinimo)
    }

    post(req: Request, res: Response) {
        const data = req.body
        const salarioMinimo = salMinimoServices.post(data)
        return res.json(salarioMinimo)
    }

    put(req: Request, res: Response) {
        const data = req.body
        const salarioMinimo = salMinimoServices.put(data)
        return res.json(salarioMinimo)
    }

}

export default new SalMinimo();

