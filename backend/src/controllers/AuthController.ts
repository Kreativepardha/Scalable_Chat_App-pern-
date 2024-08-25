import {Request, Response } from 'express';
import Prisma from '../config/dbConfig';
import jwt from 'jsonwebtoken'

interface LoginPayloadType {
	name:string;
	email:string;
	provider:string;
	oauth_id:string;
	image?:string;
}

export const JWT_SECRET = process.env.JWT_SECRET
class AuthController {
	
	static async Login(req: Request, res: Response) {
		try{
			const body:LoginPayloadType = req.body;
			let findUser = await Prisma.users.findUnique({
				where: {
				email: body.email
				}
			})
		if(!findUser) {
			findUser = await Prisma.users.create({
				data:body
			})
		}
		let jwtPayload = {
			name: body.name,
			email: body.email,
			id: findUser.id
		}
		const token = jwt.sign(jwtPayload, JWT_SECRET as string,{
			expiresIn: '35d',
		})

		return res.json({
			message:"logged in successffully",
			user: {
				...findUser,
				token: `Bearer ${token}`
			}
		})
		} catch(err) {
		console.error('internal server error', err)
		return res.status(500).json({
			message:"Something went wrong please try again"
		})
		}
	}
	
}


export default AuthController