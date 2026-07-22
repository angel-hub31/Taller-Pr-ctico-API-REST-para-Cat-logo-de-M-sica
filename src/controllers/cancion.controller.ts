import{ type Request, type Response } from "express";
import prisma from "../database/prisma.js";


export const obtenerCanciones = async (req: Request, res:Response)=>{
    try{

        const canciones=await prisma.cancion.findMany();
        res.json(canciones)

    }catch(error){
        res.status(500).json({error: "Error al obtener Canciones"})

    }
}

export const crearCanciones = async (req: Request, res:Response)=>{
    const {titulo,duracion,albumId} = req.body

    try{
        const nuevoCancion =await prisma.cancion.create({
            data: {
                titulo,duracion,albumId

            }
        })
        res.status(201).json(nuevoCancion)

    }catch(error){
        res.status(500).json({error: " al crear Cancion"})

    }

}

export const actualizarCanciones =async (req: Request, res:Response)=>{
    const {id}= req.params
    const {titulo,duracion,albumId}= req.body

    try{
        const cancionActualizado = await prisma.cancion.update({
            where: {id: Number(id)},
            data: {titulo,duracion,albumId}
        

        })
        res.json(cancionActualizado)

    }catch(error){
        res.status(404).json({error: "Cancion no encontrado"});

    }
};

export const eliminarCancion =async (req: Request, res:Response)=>{
    const {id}= req.params;

    try{
        await prisma.cancion.delete({
            where: {id:Number(id)}
        })
        res.json({Exito: "Cancion eliminado correctamente"});

    }catch(error){
        res.status(404).json({error: "Cancion no encontrado"});

    }
}