import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        // console.log(event.target.value)
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        // console.log(event)
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        // console.log(event.target.value)
        setEnteredDate(event.target.value)
    }

    // submit handler
    const submitHandler = (event) => {
        event.preventDefault();
        const expensesData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expensesData)
        props.onSaveExpenseData(expensesData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    };


    return (<div>

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>

            </div>
        </form>
    </div>)
};
export default ExpenseForm;