import express from 'express';
const router = express.Router();
import { toBirrConversion } from "../controllers/conversion";

router.get('/cbe',toBirrConversion);

export default router;