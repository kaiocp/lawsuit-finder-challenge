import express from "express";
import LawsuitController from "../controllers/lawsuitController.js";

const router = express.Router();

router
    .get("/lawsuits", LawsuitController.getLawsuits)
    .post("/lawsuits", LawsuitController.postLawsuit);

export default router;