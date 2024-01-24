import { NextFunction, Request, Response, Router } from "express";
import { postUser } from "../../Controllers/Users/users";
const user_router = Router();

user_router.use('/getUsers', (req:Request, res:Response, next:NextFunction)=>{
    console.log("routed...");
    res.status(200).send("Route success ...");
    
})
user_router.post('/newUser', postUser);

export default user_router;