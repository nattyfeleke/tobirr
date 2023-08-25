import express from 'express';
const router = express.Router();
import { cbeConversion } from "../controllers/conversion";

router.get('/cbe',cbeConversion);

export default router;