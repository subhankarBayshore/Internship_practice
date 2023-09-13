import React, { useState } from "react";
// import ExpenceItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

import "./ExpensesCSS.css"
import ExpenseChart from "./ExpensesChart";

function Expenses(appProps){

    let [filteredYear,setFilteredYear]= useState("2023")

    let filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear);
    };

    let filteredExpenses=appProps.item.filter(x=>{ 
        return x.date.getFullYear().toString()===filteredYear
    })

    console.log(filteredExpenses);

    
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

            <ExpenseChart filteredYear={filteredExpenses} />
            <ExpensesList filteredList={filteredExpenses} />
            
            
            {/* <ExpenceItem date={AppProps.item[0].date} title={AppProps.item[0].title} amount={AppProps.item[0].amount} /> */}
            {/* <ExpenceItem date={AppProps.item[1].date} title={AppProps.item[1].title} amount={AppProps.item[1].amount} /> */}
            {/* <ExpenceItem date={AppProps.item[2].date} title={AppProps.item[2].title} amount={AppProps.item[2].amount} /> */}
            {/* <ExpenceItem date={AppProps.item[3].date} title={AppProps.item[3].title} amount={AppProps.item[3].amount} /> */}
            
       </Card>
    )
}

export default Expenses;