// backend/app.js
import express from 'express';
import cors from 'cors';
import expenseRoutes from './routes/expenseRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/expenses', expenseRoutes);

export default app;
