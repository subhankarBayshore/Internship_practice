import React from "react";

import Chart from "../Chart/Chart";

let ExpenseChart=(expenseProps)=>{

    let chartDataPoint=[
        { lebel: "Jan", value: 0 },
        { lebel: "Feb", value: 0 },
        { lebel: "Mar", value: 0 },
        { lebel: "Apr", value: 0 },
        { lebel: "May", value: 0 },
        { lebel: "Jun", value: 0 },
        { lebel: "Jul", value: 0 },
        { lebel: "Aug", value: 0 },
        { lebel: "Sep", value: 0 },
        { lebel: "Oct", value: 0 },
        { lebel: "Nov", value: 0 },
        { lebel: "Dec", value: 0 }
    ]

    for(let x of expenseProps.filteredYear)
    {
        let expenseMonth=x.date.getMonth();
        chartDataPoint[expenseMonth].value = chartDataPoint[expenseMonth].value + x.amount;
    }

    console.log(expenseProps);

    return (
        <Chart chartDataPoints={chartDataPoint} />
    )
}

export default ExpenseChart;

