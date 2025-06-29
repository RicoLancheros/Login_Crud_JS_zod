import express from 'express'
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from 'cookie-parser';
import taskRouter from './routes/task.routes.js';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use("/api", authRoutes)
app.use("/api", taskRouter)




export default app;