import express from 'express';
import {
  getExpenses,
  addExpense,
  deleteExpense
} from '../controllers/expenseController.js';

const router = express.Router();

router.get('/', getExpenses);        // GET /api/expenses
router.post('/', addExpense);        // POST /api/expenses
router.delete('/:id', deleteExpense); // DELETE /api/expenses/:id

export default router;
