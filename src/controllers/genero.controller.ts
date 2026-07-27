import { type Request, type Response } from "express";
import prisma from "../database/prisma.js";

export const obtenerGeneros = async (req: Request, res: Response) => {
    try {
        const generos = await prisma.genero.findMany();
        res.json(generos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener Géneros" });
    }
};

export const crearGenero = async (req: Request, res: Response) => {
    // Solo pedimos 'nombre', el ID se genera automáticamente
    const { nombre } = req.body;

    try {
        const nuevoGenero = await prisma.genero.create({
            data: { nombre }
        });
        res.status(201).json(nuevoGenero);
    } catch (error) {
        res.status(500).json({ error: "Error al crear Género" });
    }
}

export const actualizarGenero = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre } = req.body; // Quitamos el 'id' de aquí para evitar conflictos

    try {
        const generoActualizado = await prisma.genero.update({
            where: { id: Number(id) },
            data: { nombre }
        });
        res.json(generoActualizado);
    } catch (error) {
        res.status(404).json({ error: "Género no encontrado" });
    }
};

export const eliminarGenero = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await prisma.genero.delete({
            where: { id: Number(id) }
        });
        res.json({ Exito: "Género eliminado correctamente" });
    } catch (error) {
        res.status(404).json({ error: "Género no encontrado" });
    }
}