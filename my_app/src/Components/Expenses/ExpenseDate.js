import React from "react";
import "./ExpenseDateCSS.css"

function ExpenseDate(ExpenseItemProps){
    let month=ExpenseItemProps.date.toLocaleString("en-US",{month: "long"});
    let day=ExpenseItemProps.date.toLocaleString("en-US",{day: "2-digit"});
    let year=ExpenseItemProps.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}

export default ExpenseDate;