import express from "express";
import publicRoutes from "./routes/public/public.js";
import privateRoutes from "./routes/private/private.js";
import auth from "./middlewares/auth.js";
import cors from "cors";
import corsOptions from "./configs/corsOptions.js";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

//rotas publicas
app.use("/public", publicRoutes);

//rotas privadas
app.use("/private", auth, privateRoutes);
//app.use("/private", auth, uploader); (resquícios do cloudnary)

app.listen(3001, () => console.log("Server running on port 3001"));
