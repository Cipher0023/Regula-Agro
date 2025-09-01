import express from "express";
import publicRoutes from "./routes/public/public.js";
import privateRoutes from "./routes/private/private.js";
import uploader from "./services/image/uploader.js";
import auth from "./middlewares/auth.js";
import cors from "cors";
import corsOptions from "./configs/corsOptions.js";
import dotenv from "dotenv";
import fs from "fs";
import https from "https";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
dotenv.config();
app.use(cookieParser());

//rotas publicas
app.use("/public", publicRoutes);

//rotas privadas
app.use("/private", auth, privateRoutes);
//app.use("/private", auth, uploader);

app.listen(3001, () => console.log("Server http running on port 3001"));

https
  .createServer(
    {
      cert: fs.readFileSync("SSL/code.crt"),
      key: fs.readFileSync("SSL/code.key"),
    },
    app
  )
  .listen(3002, console.log("Server https running on port 3002"));
