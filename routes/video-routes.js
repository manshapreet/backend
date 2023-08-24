import express from "express";
import { acontroller } from "../controllers/a-controllers.js";


export const videoRoutes = express.Router();

videoRoutes.post('/view', acontroller.view);
videoRoutes.get('/play/:url', acontroller.play);
// videoRoutes.get('/search:name', videoController.search);

