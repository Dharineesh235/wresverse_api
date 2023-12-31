import { NextFunction, Request, Response } from "express";
import { SuperStar_Model } from "../../Modals/superstars";
import { Error } from "mongoose";

export const postSuperstar = (req:Request, res:Response, next:NextFunction) =>{
    let data;
    try{
        data ={
            rank : req.body.rank,
            name : req.body.name,
            matches : req.body.matches,
            won : req.body.won,
            loss : req.body.loss,
            height : req.body.height,
            weight : req.body.weight,
            chest : req.body.chest,
            biceps : req.body.biceps,
            signature : req.body.signature,
            poster_url : req.body.poster_url
        }
        SuperStar_Model.insertMany([data]).then((data)=>{
            res.status(200).json({
                data
            })
        }).catch((e:Error)=>{
            console.log(e);
            
            res.status(404).json({Err : e});
        });
    }catch(e){
        console.log(e);
        res.status(404).json({err:e});
    }
}