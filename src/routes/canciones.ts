import { Router } from "express";
import { obtenerCanciones, crearCanciones, actualizarCanciones, eliminarCancion } from "../controllers/cancion.controller.js";
import { validarCancion } from "../middleware/validarCancion.js";

const router = Router();

router.get("/", obtenerCanciones);
router.post("/", validarCancion,crearCanciones);
router.put("/:id", actualizarCanciones);
router.delete("/:id", eliminarCancion);

export default router;


