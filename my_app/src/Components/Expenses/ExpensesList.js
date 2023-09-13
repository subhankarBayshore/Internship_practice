import React from "react";
import ExpenseItem from "./ExpenseItem";

let ExpensesList=(expensesProps)=>{

    if(expensesProps.filteredList.length===0)
    return <h2 className="expenses-list__fallback">No Expences added</h2>

    return(
    <ul className="expenses-list">
        {
            expensesProps.filteredList.map((x)=> 
            ( 
                <ExpenseItem
                    id={x.id}
                    date={x.date}
                    title={x.title}
                    amount={x.amount}
                />
            ))
        }
    </ul>)

/*
    let filteredExpenseContent=<div>No Expences added</div>
    if(expensesProps.filteredList.length>0)
    {
        filteredExpenseContent=expensesProps.filteredList.map((x)=> 
        ( 
            <ExpenseItem
                id={x.id}
                date={x.date}
                title={x.title}
                amount={x.amount}
            />
        ))
    }

    return (filteredExpenseContent);
*/
}

export default ExpensesList;