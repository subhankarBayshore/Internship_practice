import React from "react";

import ChartBar from "./ChartBar";
import "./ChartCSS.css";

let Chart=(expenseChartProps)=>{

    let dataPointValues=expenseChartProps?.chartDataPoints.map(x => x.value);
    let totalMax= Math.max(...dataPointValues);
console.log(expenseChartProps);
    return (
        <div className="chart">
            {expenseChartProps.chartDataPoints.map(x => (
                <ChartBar
                    key={x.id}
                    value={x.value}
                    maxValue={totalMax}
                    lebel={x.lebel}
                />
            ))}
        </div>
    )
}

export default Chart;