import { Request, Response } from 'express';
import User from '../models/user';

export const register = async ( req: Request, res: Response) => {
    try {
    const {firstName, lastName, email, password} = req.body;
    const Id = UUID()

    const registerUser = new User({Id, firstName, lastName, email, password});
    await registerUser.save()

    return res.status(200).json({Message:'Registration sucessful'})

    } catch {
        return res.status(500).json({Message: 'Unable to register'})
    }
};

export const signIn = async ( req: Request, res: Response) => {
    try {
    const {email, password} = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ Message: 'User not found' });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
        return res.status(401).json({ Message: 'Invalid password' });
    }

    // Generate and return a JWT token
    const token = generateToken(user);
    return res.status(200).json({ token });

    } catch {
        
    }
};

export const vewProfile = async ( req: Request, res: Response) => {
    try {
        const {id} = req.body;

        const profile = await User.findById(id)

        return res.status(200).json(profile)

    } catch {
        return res.status(500).json({message : 'Unable to load data'})
        
    }
};

export const updateProfile = async ( req: Request, res: Response) => {
    try {
        const {id, newFirstName, newLastName} = req.body;

        await User.findByIdAndUpdate(id, {firstName: newFirstName, lastName: newLastName})
        return res.status(200).json({Message: 'Profile updated sucessfully'})


    } catch {
        return res.status(500).json({Message: 'Unable to update profile!'})
        
    }
};

function UUID() {
    throw new Error('Function not implemented.');
}
function generateToken(user: import("mongoose").Document<unknown, {}, import("../models/user").IUser> & import("../models/user").IUser & Required<{ _id: unknown; }>) {
    throw new Error('Function not implemented.');
}

