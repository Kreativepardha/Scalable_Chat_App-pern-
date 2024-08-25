import { Router } from "express";
import AuthController from "../controllers/AuthController";
import ChatGroupController from "../controllers/ChatGroupController";

const router = Router()

router.post("/", ChatGroupController.createGroup)
router.get("/", ChatGroupController.getAllGroups)
router.get("/:id", ChatGroupController.getGroupById)
router.put("/:id", ChatGroupController.updateGroup)
router.delete("/:id", ChatGroupController.deleteGroup)


export {
    router as chatGroupRouter
}