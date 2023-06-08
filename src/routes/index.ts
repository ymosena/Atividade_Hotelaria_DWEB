import { Router } from "express";
import { default as rotafuncioario } from "./rotafuncionario"
import { default as rotasalminimo } from "./routessalminimo"

const router = Router();

router.use("/funcionario", rotafuncioario) 
router.use("/salMinimo", rotasalminimo)

export default router;