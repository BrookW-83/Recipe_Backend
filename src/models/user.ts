import { UUID } from "crypto";
import mongoose, {Document, Schema} from "mongoose";

export interface IUser extends Document {
    id: UUID,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

const userSchema : Schema<IUser> = new mongoose.Schema ({
    id: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

export default mongoose.model<IUser>('User', userSchema)