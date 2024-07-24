import { Request, Response } from "express";
import Comment from "../models/comments";

export const getComments= async (req: Request, res: Response) => {
    try { 
        const getRecipe = await Comment.find();
        return res.status(200).json(getRecipe);

    } catch {
        return res.status(500).json({message: "Unable to load comment"})
    }

};


export const createComment = async (req: Request, res: Response) => {

    try { 
        const {userId, author, content  } = req.body;

        const comment = new Comment({userId, author, content});
        await comment.save()
        return res.status(201).json({message: "Uploaded comment successfully"});


    } catch {
        return res.status(500).json({message: "Unable to comment"})
    }

 };


export const getComment = async (req: Request, res: Response) => { 
    try {
        const {Id} = req.params;

        const getComment = await Comment.findById(Id);
        return res.status(200).json(getComment);


    } catch {
        return res.status(500).json({message: "Unable to load comment"})
    }
};


export const updateComment = async (req: Request, res: Response) => { 

    try {
    
    const {Id, newContent} = req.params;

    await Comment.findByIdAndUpdate(Id, {Title: newContent}, {new: true})
    return res.status(200).send('Comment edited successfully');


    } catch {
        return res.status(500).json({message: "Unable to edit the comment"})
    }
  
};

export const deleteComment= async (req: Request, res: Response) => { 

    try {
        const {id} = req.params;

        await Comment.findByIdAndDelete(id);
        return res.status(200).send('Comment deleted successfully');

    } catch {
        return res.status(500).json({message: "Unable to delete Comment"})
    }
}

