import mongoose, {Document, Schema} from 'mongoose';
import { UUID } from "vv4";

export interface IComments extends Document {
    commentId: UUID,
    userId: string,
    Content: string;
    Date: Date,
    Author: string;
    
}

const commentSchema: Schema<IComments> = new  mongoose.Schema({
    commentId: {type: UUID, required: true },
    userId: {type: String, required: true },
    Content: {type: String, required: true},
    Date: {type: Date, required: true},
    Author: {type: String, required: true},
})


export default mongoose.model<IComments>('Recipe', commentSchema)