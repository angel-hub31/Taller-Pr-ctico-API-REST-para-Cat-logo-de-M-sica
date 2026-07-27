import { type Request,type Response, type NextFunction } from "express";

export const validarCancion =(req:Request, res:Response, next:NextFunction)=>{
    const {duracion} = req.body;

    if (typeof duracion !== "number" || duracion <30 ||duracion >600){
        return res.status(400).json({
            error: "La duracion debe estar entre 30 y 600 segundos"
        });
    }
    next();
}