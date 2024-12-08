import React from 'react';

const ExpenseFilter = (props) => {
    const yearChangeHandler = (event) => {
        props.onFilterYear(event.target.value);
    };
    return (
        <div className='expense-filter'>
            <label> filter by year:</label>
            <select onChange={yearChangeHandler} value={props.selectedYear}>
                <option value="all">All Years</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
        </div>
    );
};

export default ExpenseFilter;