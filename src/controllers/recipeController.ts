import { Request, Response } from "express";
import Recipe  from "../models/recipe";

export const getRecipes = async (req: Request, res: Response) => {
    try { 
        const getRecipe = await Recipe.find();
        return res.status(200).json(getRecipe);

    } catch {
        return res.status(500).json({message: "Unable to load recipe"})
    }

};


export const createRecipe = async (req: Request, res: Response) => {

    try { 
        const {userId, title, ingredients, instructions, preparation  } = req.body;

        const recipe = new Recipe({userId, title, ingredients, instructions, preparation});
        await recipe.save()
        return res.status(201).json({message: "Recipe created successfully"});


    } catch {
        return res.status(500).json({message: "Unable to creatr project"})
    }

 };


export const getRecipe = async (req: Request, res: Response) => { 
    try {
        const {recipeId} = req.params;

        const getRecipe = await Recipe.findById(recipeId);
        return res.status(200).json(getRecipe);


    } catch {
        return res.status(500).json({message: "Unable to load the recipe"})
    }
};


export const updateRecipe = async (req: Request, res: Response) => { 

    try {
    
    const {recipeId, newTitle, newIngredients, newInstructions, newPreparation} = req.params;

    await Recipe.findByIdAndUpdate(recipeId, {Title: newTitle, Ingredients: newIngredients, Instructions: newInstructions, Preparation: newPreparation}, {new: true})
    return res.status(200).send('Project updated successfully');


    } catch {
        return res.status(500).json({message: "Unable to update the project"})
    }
  
};

export const deleteRecipe = async (req: Request, res: Response) => { 

    try {
        const {id} = req.params;

        await Recipe.findByIdAndDelete(id);
        return res.status(200).send('Recipe deleted successfully');

    } catch {
        return res.status(500).json({message: "Unable to delete the Recipe"})
    }
}

