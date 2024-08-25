import { Response, Request } from "express"
import Prisma from "../config/dbConfig";

class ChatGroupController {
    static async getAllGroups(req: Request,res: Response) {
        try {
            const user = req.user;
            const groups = await Prisma.chatGroup.findMany({
                where: {
                    user_id: user?.id
                },
                orderBy: {
                    created_at: "desc",
                },
            });
            return res.status(200).json({ data:groups })
        } catch (err) {
            return res.status(500).json({
                message: "Something went wrong. Please try again"
            })
        }
    }

    static async getGroupById(req: Request, res: Response) {
        try {
            const {id} = req.params;
            if(id) {
                const group = await Prisma.chatGroup.findUnique({
                    where:{ id: id},
                });
                return res.json({ data: group })
            }
            return res.status(404).json({  message: "No groups found" })
        } catch (err) {
            return res.status(500).json({
                message: "Something went wrong"
            })
        }
    }

    static async createGroup(req: any,res: Response) {
        try {
            const body = req.body;
            const user = req.user;

            await Prisma.chatGroup.create({
                data: {
                    title: body?.title,
                    passcode: body?.passcode,
                    user_id: user?.id,
                },
            });
            return res.json({ message: "CHat group created successfullllly"})
        } catch (err) {
            return res.status(500).json({
                message: "Something went wrong"
            })
        }
    }
    static async updateGroup (req: Request,res: Response) {
       try {
        const { id } = req.params;
        const body = req.body;
        if(id){
            await Prisma.chatGroup.update({
                data:body,
                where:{ id: id }
            })
            return res.json({ message: "Group updated succesfully"})
        }
        return res.status(404).json({ message: "No groups found" });
    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong"
        })
    }
    }
    static async deleteGroup (req: Request,res: Response) {
        try {
            const { id } = req.params;
            await Prisma.chatGroup.delete({
                where: {id: id}
            });
            return res.json({   message: "Group deleted successfully"})
        } catch (err) {
            return res.status(500).json({
                message: "Something went wrong"
            })
        }
    }
}

export default ChatGroupController