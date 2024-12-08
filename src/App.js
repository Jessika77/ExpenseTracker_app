import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';

function App() {
  const [expense, setExpense] = useState([]);

  // function to add a new expense
  const addExpenseHandler = (expenseData) => {
    setExpense((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  };
  const [filteredYear, setFilteredYear] = useState('all');

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expense.filter((expense) => {
    return (
      filteredYear === 'all' || expense.date.getFullYear().toString() === filteredYear
    );
  });

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseList expense={expense} />
      <ExpenseFilter selectedYear={filteredYear} onFilterYear={filterYearHandler} />
    </div>
  );
}

export default App;
