import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import commentRoute from './route/commentRoute';
import recipeRoute from './route/recipeRoute';
import authRoute from './route/authRoute';
import mongoose from 'mongoose';

const app = express();
const port = 3000;
dotenv.config();

const MongoDB_URL = process.env.MongoDBURL || '';


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.use(express.json())
app.use('/api/route', authRoute)
app.use('/api/route', recipeRoute)
app.use('/api/route', commentRoute)

const startServer = async () => {
  try {
    await mongoose.connect(MongoDB_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }

    app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

}

