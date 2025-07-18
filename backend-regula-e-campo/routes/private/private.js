import express from "express";

//imports role
import { fndDevCnt } from "../../controllers/developer/fndDevCnt.js";
import { lstDevCnt } from "../../controllers/developer/lstDevCnt.js";
import { updDevCnt } from "../../controllers/developer/updDevCnt.js";
import { delDevCnt } from "../../controllers/developer/delDevCnt.js";

//imports developer
import { regRolCnt } from "../../controllers/role/regRolCnt.js";
import { fndRolCnt } from "../../controllers/role/fndRolCnt.js";
import { lstRolCnt } from "../../controllers/role/lstRolCnt.js";
import { updRolCnt } from "../../controllers/role/updRolCnt.js";
import { delRolCnt } from "../../controllers/role/delRolCnt.js";

//imports document_type
import { regDctCnt } from "../../controllers/docType/regDctCnt.js";
import { fndDctCnt } from "../../controllers/docType/fndDctCnt.js";
import { lstDctCnt } from "../../controllers/docType/lstDctCnt.js";
import { updDctCnt } from "../../controllers/docType/updDctCnt.js";
import { delDctCnt } from "../../controllers/docType/delDctCnt.js";

//imports creator
import { regCreCnt } from "../../controllers/creator/regCreCnt.js";
import { fndCreCnt } from "../../controllers/creator/fndCreCnt.js";
import { lstCreCnt } from "../../controllers/creator/lstCreCnt.js";
import { updCreCnt } from "../../controllers/creator/updCreCnt.js";
import { delCreCnt } from "../../controllers/creator/delCreCnt.js";

//imports news
import { regNwsCnt } from "../../controllers/news/regNwsCnt.js";
import { fndNwsCnt } from "../../controllers/news/fndNwsCnt.js";
import { lstNwsCnt } from "../../controllers/news/lstNwsCnt.js";
import { updNwsCnt } from "../../controllers/news/updNwsCnt.js";
import { delNwsCnt } from "../../controllers/news/delNwsCnt.js";

//imports tag_types
import { regTgtCnt } from "../../controllers/tag_types/regTgtCnt.js";
import { fndTgtCnt } from "../../controllers/tag_types/fndTgtCnt.js";
import { lstTgtCnt } from "../../controllers/tag_types/lstTgtCnt.js";
import { updTgtCnt } from "../../controllers/tag_types/updTgtCnt.js";
import { delTgtCnt } from "../../controllers/tag_types/delTgtCnt.js";

const router = express.Router();

//developer actions
router.get("/fndDev", fndDevCnt);
router.get("/lstDev", lstDevCnt);
router.put("/updDev", updDevCnt);
router.delete("/delDev", delDevCnt);

//role actions
router.post("/regRol", regRolCnt);
router.get("/fndRol", fndRolCnt);
router.get("/lstRol", lstRolCnt);
router.put("/updRol", updRolCnt);
router.delete("/delRol", delRolCnt);

//document_type actions
router.post("/regDct", regDctCnt);
router.get("/fndDct", fndDctCnt);
router.get("/lstDct", lstDctCnt);
router.put("/updDct", updDctCnt);
router.delete("/delDct", delDctCnt);

//creator actions
router.post("/regCre", regCreCnt);
router.get("/fndCre", fndCreCnt);
router.get("/lstCre", lstCreCnt);
router.put("/updCre", updCreCnt);
router.delete("/delCre", delCreCnt);

//news actions
router.post("/regNws", regNwsCnt);
router.get("/fndNws", fndNwsCnt);
router.get("/lstNws", lstNwsCnt);
router.put("/updNws", updNwsCnt);
router.delete("/delNws", delNwsCnt);

//tag_types actions
router.post("/regTgt", regTgtCnt);
router.get("/fndTgt", fndTgtCnt);
router.get("/lstTgt", lstTgtCnt);
router.put("/updTgt", updTgtCnt);
router.delete("/delTgt", delTgtCnt);

export default router;
