import { Router } from "express";
import { controlletfuncionario } from "../controllers";
const router = Router();

router.get("/", controlletfuncionario.get)
router.get("/porId/:id", controlletfuncionario.getPorId)
router.get("/porNome/:nome", controlletfuncionario.getPorNome)
router.post("/", controlletfuncionario.post)
router.put("/:id", controlletfuncionario.put)
router.delete("/:id", controlletfuncionario.delete)


export default router;