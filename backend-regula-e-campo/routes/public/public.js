import express from "express";
import { logDevCnt } from "../../controllers/developer/logDevCnt.js";
import { regDevCnt } from "../../controllers/developer/regDevCnt.js";
import { lstNwsCnt } from "../../controllers/news/lstNwsCnt.js";

const router = express.Router();

//parte de ações de developer
router.post("/logDev", logDevCnt);
router.post("/regDev", regDevCnt);
router.get("/lstNws", lstNwsCnt);

export default router;
