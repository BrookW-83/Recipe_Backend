import mongoose, {Document, Schema} from 'mongoose';
import { UUID } from "crypto";


export interface IRecipe extends Document {
    recipeId: UUID, 
    userId: string,
    Title: string;
    Ingredients: [];
    Instructions: string;
    Preparation: string;
}

const recipeSchema: Schema<IRecipe> = new  mongoose.Schema({
    recipeId: {type: String, required: true },
    userId: {type: String, required: true },
    Title: {type: String, required: true},
    Ingredients: {type: [], required: true},
    Instructions: {type: String, required: true},
    Preparation: {type: String, required: true}
})


export default mongoose.model<IRecipe>('Recipe', recipeSchema)