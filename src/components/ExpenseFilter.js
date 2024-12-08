import React, { useEffect } from 'react';

const ExpenseFilter = ({ selectedYear, expenses, onFilterYear, onFilteredExpenses }) => {
    const yearChangeHandler = (event) => {
        const selectedYear = event.target.value;
        onFilterYear(selectedYear);
    };

    useEffect(() => {
        const filteredExpenses =
            selectedYear === 'all'
                ? expenses
                : expenses.filter(
                      (exp) => new Date(exp.date).getFullYear().toString() === selectedYear
                  );

        onFilteredExpenses(filteredExpenses);
    }, [selectedYear, expenses, onFilteredExpenses]);

    return (
        <div className="expense-filter">
            <label>Filter by year:</label>
            <select onChange={yearChangeHandler} value={selectedYear}>
                <option value="all">All Years</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
        </div>
    );
};

export default ExpenseFilter;
