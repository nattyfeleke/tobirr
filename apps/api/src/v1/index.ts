// v1 routers 
import  express from 'express';
import { toBirrConversion } from './controllers/conversion';
const router = express.Router();
router.use('/conversion',toBirrConversion );

export default router;