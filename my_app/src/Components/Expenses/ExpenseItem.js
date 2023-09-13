import React from "react";
import ExpenceDate from "./ExpenseDate";
import Card from "../UI/Card";

import './ExpenseItemCSS.css'

function ExpenseItem(ExpensesProps){

    return (
            <Card className='expense-item'>
                <ExpenceDate date={ExpensesProps.date}/>  
            
                <div className='expense-item__description'>
                    <h2 className='expense-item__description'> {ExpensesProps.title} </h2>
                    <div className='expense-item__price'> {ExpensesProps.amount} </div>
                </div>
            </Card>
    )
}

export default ExpenseItem;