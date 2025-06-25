import express from "express";
import { logDevCnt } from "../../controllers/developer/logDevCnt.js";
import { regDevCnt } from "../../controllers/developer/regDevCnt.js";

const router = express.Router();

//parte de ações de developer
router.post("/logDev", logDevCnt);
router.post("/regDev", regDevCnt);

export default router;
