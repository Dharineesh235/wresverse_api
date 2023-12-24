import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000
export const app = express();

app.use(express.json());

app.listen(PORT, ()=>console.log(`listening on ${PORT}...`));
