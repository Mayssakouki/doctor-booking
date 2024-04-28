import express from "express";
import { getDoctor } from "../Controllers/doctorController.js";

const router = express.Router();

// Route pour récupérer le médecin unique
router.get("/", getDoctor);
router.post("");

export default router;

// routes/doctorRoutes.js

//export default doctorRoutes;
