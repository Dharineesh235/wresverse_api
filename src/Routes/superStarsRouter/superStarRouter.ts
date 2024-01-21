import { Router } from "express";
import {postSuperstar, getAllSuperStars, deleteAstarByID, updateByRank} from "../../Controllers/SuperStars/superStars";

export const superStar_router = Router();

superStar_router.post('/newstar', postSuperstar);
superStar_router.get('/allstars', getAllSuperStars);
superStar_router.delete('/deletestar', deleteAstarByID);
superStar_router.put('/updateByRank/rank/:rank', updateByRank);