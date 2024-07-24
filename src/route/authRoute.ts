import express from 'express';
import {vewProfile, register, updateProfile, signIn} from '../controllers/authController';
import { validate } from '../middleware/validation';


const router = express.Router();

router.post('/auth', validate(User),  register)
router.post('/auth', signIn);
router.get('/auth/{id}', vewProfile);
router.put('/project/{id}', updateProfile);

export default router;