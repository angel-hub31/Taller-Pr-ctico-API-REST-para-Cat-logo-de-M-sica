import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

// Extraemos Pool de pg
const { Pool } = pg;

// Creamos la conexión usando Pool
const pool = new Pool({ 
    connectionString: process.env.DATABASE_URL 
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export default prisma;