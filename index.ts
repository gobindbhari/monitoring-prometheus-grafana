import express, { type NextFunction, type Request, type Response } from "express"
import client from "prom-client"
import { middleware } from "./middleware";




const app = express()

app.use(middleware);

app.get('/cpu', (req: Request, res:Response ) =>{
    for (let i = 0; i < 100000; i++) {
        Math.random()
    };
    res.status(200).json({
        message: "CPU intensive task completed"
    })
})
app.get('/users', (req, res ) =>{
    res.status(200).json({
        message: "users"
    })
})
app.get('/metrics', async (req, res ) =>{
     const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})