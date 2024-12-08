import React from 'react';

const ExpenseList = (props) => {
  if (props.expense.length === 0) {
    return <p className='alertmsg'>No expenses found! Please add some expenses.</p>;
  }

  return (
    <ul className="expense-list">
      {props.expense.map((expense, index) => {
        let formattedDate = "Invalid Date";

        if (expense.date instanceof Date && !isNaN(expense.date.getTime())) {
          formattedDate = expense.date.toISOString().split('T')[0];
        }

        return (
          <li key={index} className="expense-item">
            <span className="serial-number">{index + 1}.</span>
            <div className="expense-content">
              <h3 className="expense-title">{expense.title}</h3>
              <p className="expense-amount">₹{expense.amount}</p>
            </div>
            <p className="expense-date">{formattedDate}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ExpenseList;
