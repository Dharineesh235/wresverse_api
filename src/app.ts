import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'

const PORT = process.env.PORT || 5000;

export const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, ()=>console.log(`http://localhost:${PORT}`));
