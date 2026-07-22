import{ type Request, type Response } from "express";
import prisma from "../database/prisma.js";


export const obtenerAlbumes = async (req: Request, res:Response)=>{
    try{

        const albumes=await prisma.album.findMany();
        res.json(albumes)

    }catch(error){
        res.status(500).json({error: "Error al obtener Albumes"})

    }
}

export const crearAlbumes = async (req: Request, res:Response)=>{
    const {titulo,artista,anio} = req.body

    try{
        const nuevoAlbum =await prisma.album.create({
            data: {
                titulo,artista,anio

            }
        })
        res.status(201).json(nuevoAlbum)

    }catch(error){
        res.status(500).json({error: " al crear Album"})

    }

}

export const actualizarAlbumes =async (req: Request, res:Response)=>{
    const {id}= req.params
    const {titulo,artista,anio}= req.body

    try{
        const albumActualizado = await prisma.album.update({
            where: {id: Number(id)},
            data: {titulo, artista, anio}
        

        })
        res.json(albumActualizado)

    }catch(error){
        res.status(404).json({error: "Album no encontrado"});

    }
};

export const eliminarAlbum =async (req: Request, res:Response)=>{
    const {id}= req.params;

    try{
        await prisma.album.delete({
            where: {id:Number(id)}
        })
        res.json({Exito: "Album eliminado correctamente"});

    }catch(error){
        res.status(404).json({error: "Album no encontrado"});

    }
}