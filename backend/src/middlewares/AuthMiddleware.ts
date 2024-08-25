import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../controllers/AuthController";




const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if(authHeader === null || authHeader === undefined) {
        return res.status(401).json({ status:401, message:"Unauthorized"  })
    }
    const token = authHeader.split(" ")[1];

    jwt.verify(token, JWT_SECRET as string, (err, user) => {
        if(err) 
            return res.status(401).json({ message: "Unauthorized"})
        req.user = user as AuthUser;
        next()
    })
    
}

export default authMiddleware;