import { Router } from "express";
import { obtenerCanciones,crearCanciones,actualizarCanciones,eliminarCancion } from "../controllers/cancion.controller.js";

const router =Router();

router.get("/",obtenerCanciones);
router.post("/", crearCanciones);
router.put("/:id", actualizarCanciones);
router.delete("/:id", eliminarCancion);

export default router;