import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.router.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const routerList = [authRouter];
app.use(routerList);

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Rodou suave na porta ${PORT}`));
