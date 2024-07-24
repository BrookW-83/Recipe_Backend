import express from 'express';
import {getComment, createComment, getComments, updateComment, deleteComment} from '../controllers/commentController';
import authMiddleware from '../middleware/authMiddleware';


const router = express.Router();

router.get('/comment',authMiddleware,  getComments)
router.post('/comment', authMiddleware, createComment);
router.get('/comment/{id}', authMiddleware, getComment);
router.put('/comment/{id}', authMiddleware, updateComment);
router.delete('/comment/{id}', authMiddleware, deleteComment);

export default router;