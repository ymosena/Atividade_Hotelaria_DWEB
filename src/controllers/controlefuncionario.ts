import { Request, Response } from "express";
import funcionarioServices from "../services/funcionarioServices";

class Funcionario {
  async get(req: Request, res: Response) {
    //
    const funcionario = await funcionarioServices.get();
    return res.json(funcionario);
  }

  async getPorId(req: Request, res: Response) {
    const { id } = req.params;
    const funcionario = await funcionarioServices.getPorId(parseInt(id));
    return res.json( { data: funcionario });
  }

  async getPorNome(req: Request, res: Response) {
    const { nome } = req.params;
    const funcionario = await funcionarioServices.getPorNome(nome);
    return res.json( { data: funcionario });
  }

  async post(req: Request, res: Response) {
    const data = req.body;
    const novoFuncionario = await funcionarioServices.post(data);
    return res.json( { data: novoFuncionario });
  }

  async put(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const alteracaoFuncionario = await funcionarioServices.put(
      data,
      parseInt(id)
    );
    return res.json( { data: alteracaoFuncionario });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await funcionarioServices.delete(parseInt(id));
    return res.send(204);
  }
}

export default new Funcionario();
