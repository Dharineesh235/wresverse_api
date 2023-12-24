import { Router } from "express";
import {user_router} from './userRoute';
import { superStar_router } from "./superStarRouter";

export const router = Router();

router.use('/user', user_router);
router.use('/superstar', superStar_router)