import { Router } from "express";
import { controlesalminimo } from "../controllers";
const router = Router();

router.get("/:id", controlesalminimo.get)
router.post("/", controlesalminimo.post)
router.put("/:id", controlesalminimo.put)


export default router;