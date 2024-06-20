import express from "express"
const app = express()
import dotenv from "dotenv";
dotenv.config();

import authRouter from "./routes/auth.routes.js"

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//routes
app.get('/api/auth', authRouter)

app.listen(port, () => {
  console.log("Port 3000")
})