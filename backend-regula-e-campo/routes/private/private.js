import express from "express";

//imports role
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

//imports photos
import { regPhtCnt } from "../../controllers/photos/regPhtCnt.js";
import { fndPhtCnt } from "../../controllers/photos/fndPhtCnt.js";
import { lstPhtCnt } from "../../controllers/photos/lstPhtCnt.js";
import { updPhtCnt } from "../../controllers/photos/updPhtCnt.js";
import { delPhtCnt } from "../../controllers/photos/delPhtCnt.js";

//import Rdr
import { regRdrCnt } from "../../controllers/reader/regRdrCnt.js";
import { fndRdrCnt } from "../../controllers/reader/fndRdrCnt.js";
import { lstRdrCnt } from "../../controllers/reader/lstRdrCnt.js";
import { updRdrCnt } from "../../controllers/reader/updRdrCnt.js";
import { delRdrCnt } from "../../controllers/reader/delRdrCnt.js";

//import Com
import { regComCnt } from "../../controllers/comments/regComCnt.js";
import { fndComCnt } from "../../controllers/comments/fndComCnt.js";
import { lstComCnt } from "../../controllers/comments/lstComCnt.js";
import { updComCnt } from "../../controllers/comments/updComCnt.js";
import { delComCnt } from "../../controllers/comments/delComCnt.js";

//import Lik
import { regLikCnt } from "../../controllers/likes/regLikCnt.js";
import { fndLikCnt } from "../../controllers/likes/fndLikCnt.js";
import { lstLikCnt } from "../../controllers/likes/lstLikCnt.js";
import { updLikCnt } from "../../controllers/likes/updLikCnt.js";
import { delLikCnt } from "../../controllers/likes/delLikCnt.js";

//import Rbr
import { regRbrCnt } from "../../controllers/breadcrumbs/regRbrCnt.js";
import { fndRbrCnt } from "../../controllers/breadcrumbs/fndRbrCnt.js";
import { lstRbrCnt } from "../../controllers/breadcrumbs/lstRbrCnt.js";
import { updRbrCnt } from "../../controllers/breadcrumbs/updRbrCnt.js";
import { delRbrCnt } from "../../controllers/breadcrumbs/delRbrCnt.js";

const router = express.Router();

//developer actions
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

//photos actions
router.post("/regPht", regPhtCnt);
router.get("/fndPht", fndPhtCnt);
router.get("/lstPht", lstPhtCnt);
router.put("/updPht", updPhtCnt);
router.delete("/delPht", delPhtCnt);

//Rdr actions
router.post("/regRdr", regRdrCnt);
router.get("/fndRdr", fndRdrCnt);
router.get("/lstRdr", lstRdrCnt);
router.put("/updRdr", updRdrCnt);
router.delete("/delRdr", delRdrCnt);

//Com actions
router.post("/regCom", regComCnt);
router.get("/fndCom", fndComCnt);
router.get("/lstCom", lstComCnt);
router.put("/updCom", updComCnt);
router.delete("/delCom", delComCnt);

//Lik actions
router.post("/regLik", regLikCnt);
router.get("/fndLik", fndLikCnt);
router.get("/lstLik", lstLikCnt);
router.put("/updLik", updLikCnt);
router.delete("/delLik", delLikCnt);

//Rbr actions
router.post("/regRbr", regRbrCnt);
router.get("/fndRbr", fndRbrCnt);
router.get("/lstRbr", lstRbrCnt);
router.put("/updRbr", updRbrCnt);
router.delete("/delRbr", delRbrCnt);

export default router;
