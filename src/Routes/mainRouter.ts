import { Router } from "express";
import user_router from './userRouter/userRoute';
import { superStar_router } from "./superStarsRouter/superStarRouter";

export const router = Router();

router.use('/user', user_router);
router.use('/superstar', superStar_router)