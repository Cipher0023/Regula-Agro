import express from "express";

import { logDevCnt } from "../../controllers/developer/logDevCnt.js";
import { logCreCnt } from "../../controllers/creator/logCreCnt.js";
import { logRdrCnt } from "../../controllers/reader/logRdrCnt.js";

import { regDevCnt } from "../../controllers/developer/regDevCnt.js";
import { regRdrCnt } from "../../controllers/reader/regRdrCnt.js";

import { lstNwsCnt } from "../../controllers/news/lstNwsCnt.js";
import { lstRolCnt } from "../../controllers/role/lstRolCnt.js";
import { lstTgtCnt } from "../../controllers/tag_types/lstTgtCnt.js";
import { lstPhtCnt } from "../../controllers/photos/lstPhtCnt.js";

import { fndDevCnt } from "../../controllers/developer/fndDevCnt.js";
import { fndNwsCnt } from "../../controllers/news/fndNwsCnt.js";
import { fndCreCnt } from "../../controllers/creator/fndCreCnt.js";
import { fndRdrCnt } from "../../controllers/reader/fndRdrCnt.js";

const router = express.Router();

//ações de developer
router.post("/logDev", logDevCnt);
router.post("/regDev", regDevCnt);
router.get("/fndDev", fndDevCnt);

//ações de creator
router.post("/logCre", logCreCnt);
router.get("/fndCre", fndCreCnt);

//rotas de news
router.get("/lstNws", lstNwsCnt);
router.get("/fndNws", fndNwsCnt);

//rotas roles
router.get("/lstRol", lstRolCnt);

//rotas tags
router.get("/lstTgt", lstTgtCnt);

//rotas de reader
router.post("/logRdr", logRdrCnt);
router.get("/fndRdr", fndRdrCnt);
router.post("regRdr", regRdrCnt);

//rotas de photos
router.get("/lstPht", lstPhtCnt);

// endpoint de logout para limpar cookie httpOnly
router.post("/logout", (req, res) => {
  const isProd = process.env.NODE_ENV === "production";
  res.clearCookie("token", {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
  });
  return res.status(200).json({ message: "Logout realizado" });
});

export default router;
