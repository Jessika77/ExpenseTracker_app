import React, { useState, useCallback } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';

function App() {
  const [expense, setExpense] = useState([]);
  const [filteredYear, setFilteredYear] = useState('all');
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  // Function to add a new expense
  const addExpenseHandler = (expenseData) => {
    setExpense((prevExpense) => [expenseData, ...prevExpense]);
  };

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Memoize the callback function to prevent unnecessary re-renders
  const updateFilteredExpenses = useCallback((filtered) => {
    setFilteredExpenses(filtered);
  }, []);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseFilter
        selectedYear={filteredYear}
        expenses={expense}
        onFilterYear={filterYearHandler}
        onFilteredExpenses={updateFilteredExpenses}
      />
      <ExpenseList expense={filteredExpenses} />
    </div>
  );
}

export default App;
