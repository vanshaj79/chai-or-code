import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
// parses urlencoded requests and extended:true means allowing for rich objects and arrays to be encoded into URL-encoded format,
// and when extended:false means parsing simple key value pairs.

app.use(express.static("public"))
// this is for storing files locally in the server

app.use(cookieParser())
// it is basically to use cookies from user's browser to server

// routes import
import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/users",userRouter)

export { app }