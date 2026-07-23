import express from "express";
import albumRouter from './routes/albumes.js';
import cancionRouter from './routes/canciones.js';

const app = express(); 
const PORT = 3000;

app.use(express.json());

app.use("/albumes", albumRouter);
app.use("/canciones", cancionRouter); 

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto: ", PORT);
});