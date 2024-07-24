import express from 'express';
import {getRecipe, createRecipe, getRecipes, updateRecipe, deleteRecipe} from '../controllers/recipeController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.post('/recipe', authMiddleware,  createRecipe)
router.get('/recipe', authMiddleware, getRecipe);
router.get('/recipe/{id}', authMiddleware, getRecipe);
router.put('/recipe/{id}', authMiddleware, updateRecipe);
router.delete('/recipe/{id}', authMiddleware, deleteRecipe);

export default router;