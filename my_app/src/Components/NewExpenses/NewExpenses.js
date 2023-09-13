import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpensesCSS.css"
let NewExpenses=(appProps)=>{
    
    let renderFunc=(takeExpenseData)=>{
        let expenseData={
            ...takeExpenseData,
            id: Math.random().toString()
        };
        appProps.onSaveNewExpenseData(expenseData);
    }


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseFormData={renderFunc}/>
        </div>
    )
}

export default NewExpenses; 