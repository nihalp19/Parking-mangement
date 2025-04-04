import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/user.routes.js"
import { connectDB } from "./lib/connectDB.js"
import cors from "cors"

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()


app.use(cors({
    origin: ["http://localhost:5173/","https://parking-mangement.vercel.app/"]
}))

app.use(express.json())
app.all("/", async (req, res) => {
    res.send("BACKEND IS RUNNING")
})

app.use("/api",userRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log(`SERVER STARTED AT PORTED NO ${PORT}`)
})

