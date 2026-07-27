import { Router } from "express";
import { obtenerAlbumes, crearAlbumes,actualizarAlbumes,eliminarAlbum, obtenerAlbumId } from "../controllers/album.controller.js";

const router = Router ();

router.get("/", obtenerAlbumes);
router.get("/:id", obtenerAlbumId);
router.post("/",crearAlbumes);
router.put("/:id", actualizarAlbumes);
router.delete("/:id", eliminarAlbum);

export default router;