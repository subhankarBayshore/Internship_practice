import React from "react";

import "./ChartBarCSS.css"

let ChartBar=(chartProps)=>{
console.log(chartProps);
    let barFillHeight="0%";

    if(chartProps.max>0)
        barFillHeight=Math.round(((chartProps.value/chartProps.maxValue)*100)+"%");


    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{chartProps.label}</div>
        </div>

    )
}

export default ChartBar;