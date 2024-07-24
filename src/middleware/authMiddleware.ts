import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');
    const user = req.body;

    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};

export default authMiddleware;