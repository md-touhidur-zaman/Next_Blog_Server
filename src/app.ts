import express, { type Request, type Response } from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.get("/", (req:Request, res:Response) => {
  res.send("The next blog server is coming soon!!!")
})
export default app

