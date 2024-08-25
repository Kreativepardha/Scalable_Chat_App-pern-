import { PrismaClient } from '@prisma/client'

const Prisma = new PrismaClient({
	log: ['error', 'query'],
})

export default Prisma;
