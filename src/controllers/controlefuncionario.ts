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
    return res.render("alterarFuncionario", {
      data: funcionario,
      categorias: ["gerente", "funcionario"],
      turnos: ["noturno", "vespertino", "matutino"],
    });
  }

  async getPorNome(req: Request, res: Response) {
    const { nome } = req.params;
    const funcionario = await funcionarioServices.getPorNome(nome);
    return res.json({ data: funcionario });
  }

  async post(req: Request, res: Response) {
    const data = req.body;
    await funcionarioServices.post(data);
    const funcionarios = await funcionarioServices.get();
    return res.render("fun", { data: funcionarios });
  }

  async put(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    await funcionarioServices.put(data, parseInt(id));
    const funcionarios = await funcionarioServices.get();
    return res.render("fun", { data: funcionarios });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await funcionarioServices.delete(parseInt(id));
    const funcionarios = await funcionarioServices.get();
    return res.render("fun", { data: funcionarios });
  }

  async renderCadastroForm(req: Request, res: Response) {
    const categorias = ["gerente", "funcionario"];
    res.render("form", { categorias: categorias });
  }

  async renderTabela(req: Request, res: Response) {
    const data = await funcionarioServices.get();
    res.render("fun", { data: data });
  }
}

export default new Funcionario();
