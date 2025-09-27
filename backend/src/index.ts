// server/src/index.js
import express , { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { errorHandler } from './middleware/errorHandeler.js';
import { test } from './test.js';
import coursesRoutes from './routes/courses.js'; 
import ratingsRoutes from './routes/ratings.js';
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/courses', coursesRoutes);
app.use('/api/ratings', ratingsRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Learning Platform API');
});

app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  test();
});
