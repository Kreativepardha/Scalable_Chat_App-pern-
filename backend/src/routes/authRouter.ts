import { Router } from "express";
import AuthController from "../controllers/AuthController";

const router = Router()

router.post("/login", AuthController.Login)


export {
    router as authRouter
}