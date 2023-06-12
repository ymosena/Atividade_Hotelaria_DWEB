import { Router } from "express";
import { default as rotafuncioario } from "./rotafuncionario";
import { default as rotasalminimo } from "./routessalminimo";

const router = Router();

router.get("/", (req,res) => {
    res.render("form")
})

router.get('/funcionario', (req, res) => {
    res.render('fun');
  });
  
  router.get('/salario-inicial', (req, res) => {
    res.render('salario');
  });


  
router.use("/funcionario", rotafuncioario);
router.use("/salMinimo", rotasalminimo);

export default router;
