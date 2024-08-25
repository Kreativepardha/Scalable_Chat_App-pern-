import express, {Application, Request,Response } from 'express'
import * as path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import 'dotenv/config'
import { mainRouter } from './routes/mainRouter'
import { Server } from 'socket.io'
import { createServer } from 'http'


const app:Application = express();
const PORT = process.env.PORT || 3002
const server = createServer(app)


const io = new Server(server, {
	cors: {
		origin: "*"
	}
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get("/", (req,res) => {
	return res.send("HEALTH CHECKING");
})



app.use("/api/v1", mainRouter);
server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))