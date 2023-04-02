import express, { json } from "express";
import cors from 'cors'
import * as dotenv from 'dotenv'
import { UserRoute } from "./4-controllers/userRoute";


dotenv.config()
const server = express();

server.use(cors())
server.use(json());

server.use(UserRoute)

server.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})