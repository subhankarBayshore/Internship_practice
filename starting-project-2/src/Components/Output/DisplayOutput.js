import React from "react";

let DisplayOutput=(appProps)=>{

    return (
        <div>
            <div>
                { 
                    (appProps.props1.age>0) ?
                        <div>{`My name is ${appProps.props1.name}, and my age is ${appProps.props1.age}`}</div>
                        :
                        <div>{`${appProps.props1.name} is a Invalid input`}</div>
                }
            </div>
        </div>
    )

}

export default DisplayOutput;