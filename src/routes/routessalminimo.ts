import { Router } from "express";
import { controlesalminimo } from "../controllers";
const router = Router();

router.get("/", controlesalminimo.get);
router.post("/", controlesalminimo.post);
router.post("/alterar/", controlesalminimo.put);

export default router;
