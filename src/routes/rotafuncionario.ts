import { Router } from "express";
import { controlletfuncionario } from "../controllers";
const router = Router();

router.get("/", controlletfuncionario.get);
router.get("/porId/:id", controlletfuncionario.getPorId);
router.get("/porNome/:nome", controlletfuncionario.getPorNome);
router.post("/", controlletfuncionario.post);
router.post("/alterar/:id", controlletfuncionario.put);
router.get("/deletar/:id", controlletfuncionario.delete);
router.get("/fun", controlletfuncionario.renderTabela);
router.get("/form", controlletfuncionario.renderCadastroForm);

export default router;
