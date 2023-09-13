import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from "./Components/Expenses/Expenses";  // rule: receiving func is need to import
import NewExpenses from './Components/NewExpenses/NewExpenses';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

  
function App() {
  
    let expenseObj=[
    {
        date:new Date(),
        title: "Car parts",
        amount: 5000
    },
    {
        date:new Date(),
        title: "Electricity bill",
        amount: 2000
    },
    {
        date:new Date(),
        title: "House rent",
        amount: 10000
    },
    {
        date:new Date(),
        title: "Recherge",
        amount: 500
    }
    ]
/*
  return React.createElement("div",{},
    React.createElement("h1",{},"Let's add Expenses"),
    React.createElement(Expenses,{item: expenseObj},{})
  );
*/
  let [expenses,setExpenses]=useState(expenseObj);

  let addNewExpenseHandler=(tekeNewExpenseData)=>{
    setExpenses((prevExpences)=>{
      return [tekeNewExpenseData,...prevExpences];
    })
  }
  
  return (
    <div>
      <NewExpenses onSaveNewExpenseData={addNewExpenseHandler}/>
      <Expenses item={expenses}/>     
    </div>
  );

}

export default App;


//expenseObj is sended via item, that's why Expenses func need to follow this format "props".item[#].#