import express, {Application, Request,Response } from 'express'
import * as path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import 'dotenv/config'
import { mainRouter } from './routes/mainRouter'

const app:Application = express();
const PORT = process.env.PORT || 3002

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.get("/", (req,res) => {
	return res.send("HEALTH CHECKING");
})

app.use("/api/v1", mainRouter);
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))