import { Router } from "express";
import { obtenerGeneros, crearGenero, actualizarGenero, eliminarGenero } from "../controllers/genero.controller.js";

const router = Router();

router.get("/", obtenerGeneros);
router.post("/", crearGenero);
router.put("/:id", actualizarGenero);
router.delete("/:id", eliminarGenero);

export default router;