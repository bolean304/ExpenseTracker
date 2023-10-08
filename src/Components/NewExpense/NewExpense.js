import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
import { useState } from "react";
const NewExpense = (props) =>{
    const [isEditing,setIsEditing] = useState(false)
    const saveExpenseDataHandler =(enteredExpenseData) => {
        console.log("inside saveExpenseDataHandler")
        const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString()
        };
        console.log(expenseData)
        props.onAddExpense(expenseData)
        setIsEditing(false)
    };

    function startEditingHandler(){
            setIsEditing(true);
    };


    function stopEditingHandler(){
        setIsEditing(false);
    };
    return (
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
       { isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>)

};
export default NewExpense;