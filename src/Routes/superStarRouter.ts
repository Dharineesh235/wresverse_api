import { Router } from "express";
import { postSuperstar } from "../Controllers/SuperStars/superStars";

export const superStar_router = Router();

superStar_router.post('/newstar', postSuperstar)