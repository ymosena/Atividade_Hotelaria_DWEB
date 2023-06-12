import { Router } from "express";
import { default as rotafuncioario } from "./rotafuncionario";
import { default as rotasalminimo } from "./routessalminimo";

const router = Router();

router.get("/funcionario/cadastro", (req, res) => {
  res.render("form", { categorias: ['gerente', 'funcionario'], categoria: 'gerente' });
});

router.get("/", (req, res) => {
  res.render("home");
});

router.get('/funcionario/listagem', async (req, res) => {
  try {
    const response = await fetch("http://localhost:3000/funcionario", { method: "GET" });
    const data = await response.json();

    res.render('fun', { data: data });
  } catch (error) {
    console.error(error);

    // Renderize a página mesmo em caso de erro
    res.render('fun', { data: null });
  }
});

router.get('/salario-inicial', (req, res) => {
  res.render('salario');
});

router.use("/funcionario", rotafuncioario);
router.use("/salMinimo", rotasalminimo);

export default router;
