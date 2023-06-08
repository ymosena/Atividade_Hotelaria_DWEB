import { Router } from "express";
const router = Router();

import { default as rotafuncioario } from "./rotafuncionario"

router.use("/funcionario", rotafuncioario)

export default router;