import express from "express";
import LawsuitController from "../controllers/lawsuitController.js";

const router = express.Router();

router
    .get("/lawsuits", LawsuitController.getLawsuits)
    .get("/lawsuits/:court&:number", LawsuitController.getLawsuitByCourtAndCnjNumber)
    .post("/lawsuits", LawsuitController.postLawsuit);

export default router;