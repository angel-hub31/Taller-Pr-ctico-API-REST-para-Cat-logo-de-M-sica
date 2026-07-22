import express from "express";
import albumRouter from './routes/albumes.js';
import cancionRouter from './routes/canciones.js';

const app = express(); // <--- Corregido: se usa const y la sintaxis correcta
const PORT = 3000;

app.use(express.json());

app.use("/albumes", albumRouter);
app.use("/canciones", cancionRouter); // <--- Corregido: se usa .use en lugar de .request

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto: ", PORT);
});