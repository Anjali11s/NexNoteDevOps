import express from 'express';
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDb } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';


dotenv.config();
// console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001

// connectDb();

// middleware
app.use(cors({
    origin:"http://localhost:5173",
})
);
app.use(express.json()) // this middleware will parse JSON bodies: req.body
app.use(rateLimiter) // middleware for rate limiting 

// custom middleware
// app.use((req,res,next)=>{ // a global middleware
//     console.log(`Req  method is: ${req.method} & Req url is: ${req.url}`);
//     next();
// })


// for rate limiting 
// npm i @upstash/ratelimit@2.0.5 @upstash/redis@1.34.9 - install redis
app.use("/api/notes",notesRoutes); // use the notesRoutes for all the routes that starts with /api/notes

connectDb().then(()=>{ // once database is connected then only start listening
    app.listen(PORT,()=>{
        console.log("server started on port :", PORT);
    })
})

// mongodb+srv://singhanjali9185_db_user:WXZbDqRg43UxO5OZ@cluster0.s3dia0b.mongodb.net/?appName=Cluster0