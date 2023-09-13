import React from "react";


let ExpensesFilter=(expensesProps)=>{

    let dropDownChangeHandler=(event)=>{
        expensesProps.onChangeFilter(event.target.value);
    }

    return (
        <div>
            <lebel>Filter by Year</lebel>
            <select value={expensesProps.selected} onChange={dropDownChangeHandler}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>    
            </select>
        </div>
    )
}

export default ExpensesFilter;