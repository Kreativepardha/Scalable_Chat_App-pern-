import { Router } from "express";
import { authRouter } from "./authRouter";
import { chatGroupRouter } from "./chatGroupRoute";
import authMiddleware from "../middlewares/AuthMiddleware";



const router = Router()

router.use('/auth', authRouter )
router.use('/chatgroup', authMiddleware,chatGroupRouter )



export {
    router as mainRouter
}