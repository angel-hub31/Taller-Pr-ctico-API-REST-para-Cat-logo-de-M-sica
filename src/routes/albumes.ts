import { Router } from "express";
import { obtenerAlbumes, crearAlbumes,actualizarAlbumes,eliminarAlbum } from "../controllers/album.controller.js";

const router = Router ();

router.get("/", obtenerAlbumes);
router.post("/",crearAlbumes);
router.put("/:id", actualizarAlbumes);
router.delete("/:id", eliminarAlbum);

export default router;