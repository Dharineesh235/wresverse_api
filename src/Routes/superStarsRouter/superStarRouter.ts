import { Router } from "express";
import {postSuperstar, getAllSuperStars, deleteAstarByID, updateById} from "../../Controllers/SuperStars/superStars";

export const superStar_router = Router();

superStar_router.get('/allstars', getAllSuperStars);
superStar_router.post('/star', postSuperstar);
superStar_router.delete('/star/:id', deleteAstarByID);
superStar_router.put('/star/:id', updateById);