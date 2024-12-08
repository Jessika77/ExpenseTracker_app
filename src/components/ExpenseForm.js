import { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState(''); 
  const [Amount, setAmount] = useState(''); 
  const [date, setDate] = useState(''); 

  const titleChangeHandler = (event) => {
    setTitle(event.target.value); // Update title state
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value); // Update amount state
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value); // Update date state
  };

  // Form submission handler
  const submitHandler = (event) => {
    event.preventDefault(); 

    if (!date) {
      alert("Please select a valid date.");
      return;
    }

    const expenseData = {
      title: title.trim(), 
      amount: +Amount, 
      date: new Date(date), 
    };
    
    console.log(expenseData);
    if (isNaN(expenseData.date.getTime())) {
      alert("Invalid date format. Please check your input.");
      return;
    }

    props.onAddExpense(expenseData); // Pass the data to parent component

    setTitle(''); 
    setAmount(''); 
    setDate(''); 
  };

  return (
    <form onSubmit={submitHandler}className="expenseform">
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          value={title} // Bind input to title state
          onChange={titleChangeHandler} 
        />
      </div>
      <div className="form-control">
        <label>Amount</label>
        <input
          type="number"
          value={Amount} // Bind input to Amount state
          onChange={amountChangeHandler} 
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="date"
          value={date} // Bind input to date state
          onChange={dateChangeHandler}
        />
      </div>
      <div className="form-actions">
      <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
