import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
dotenv.config();

exports.generateToken=(req:Request, res:Response, next:NextFunction)=>{
    const key:string | jwt.Secret = process.env.SECRET_KEY!;
    console.log("key");
    console.log(typeof(key));
    const user = {
        id: req.body.id,
        username: req.body.userName,
        password: req.body.password
    };
    const token = jwt.sign(user, key, {expiresIn:'1h'});
    console.log(token);
}