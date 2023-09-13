import React, { useState } from "react";
import "./ExpenseFormCSS.css"

let ExpenseForm=(newExpensesProps)=>{

    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");
    const [date,setDate]=useState("");

    const oneInputHandling=(iddentifier, value)=>{
        if(iddentifier==="title")
        {
            setTitle(value);
        }        
        else if(iddentifier==="amount")
        {
            setAmount(value);
        }
        else if(iddentifier==="date")
        {
            setDate(value);
        }
    }        // This is the alternative way of next 3 handler function.
/*
    let getTitleValueHandler=(event)=>{
        setTitle(event.target.value);
    }

    let getAmountValueHandler=(event)=>{
        setAmount(event.target.value);
    }

    let getDateValueHandler=(event)=>{
        setDate(event.target.value);
    }
*/


/*
    const [userInput,setUserInput]=useState({
        getTitle:"",
        getAmount:"",
        getDate:""
    })

    const getTitleValueHandler=(event)=>{
        setUserInput((prevState)=>{
            return {
                ...prevState,
                getTitle: event.target.value
            }
        })
    }

    const getAmountValueHandler=(event)=>{
        setUserInput((prevState)=>{
            return {
                ...prevState,
                getAmount: event.target.value
            }
        })
    }

    const getDateValueHandler=(event)=>{
        setUserInput((prevState)=>{
            return {
                ...prevState,
                getDate: event.target.value
            }
        })
    }
*/

    const submitHandler=(event)=>{
        
        event.preventDefault();

        const expenseData={
            title: title,
            amount: amount,
            date: new Date(date)
        };

        newExpensesProps.onSaveExpenseFormData(expenseData);
        setTitle("");
        setAmount("");
        setDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls"> 
                <div className="new-expense__controls">
                    <label>Title</label>
                    {/* <input type="text" onChange={getTitleValueHandler}/> */}
                    <input 
                        type="text"
                        onChange={(event)=>{oneInputHandling("title",event.target.value)}}
                        value={title}   // change by myself
                    />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    {/* <input type="number" min="0.01" step="0.01" onChange={getAmountValueHandler} /> */}
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        onChange={(event)=>{oneInputHandling("amount",event.target.value)}}
                        value={amount}  // change by myself
                    />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    {/* <input type="date" min="2019-01-01" max="2023-12-31" onChange={getDateValueHandler}/> */}
                    <input 
                        type="date" 
                        min="2019-01-01" 
                        max="2023-12-31" 
                        onChange={(event)=>{oneInputHandling("date",event.target.value)}}
                        value={date}    // change by myself
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
        
    )
}

export default ExpenseForm;