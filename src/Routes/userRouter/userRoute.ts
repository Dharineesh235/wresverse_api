import { Router } from "express";
import { NextFunction, Request, Response } from "express";
export const user_router = Router();

user_router.use('/getUsers', (req:Request, res:Response, next:NextFunction)=>{
    console.log("routed...");
    res.status(200).send("Route success ...");
    
})