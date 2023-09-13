import React from "react";

import classes from "./GenericInput.module.css"

const GenericInput=React.forwardRef((props,ref)=>{
    return (
        <div className={classes.input}> 
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref}  {...props.input} />
        </div>
    )
});

export default GenericInput;

/*  here this is a reuseable component that's why I did not used specific props name,

    in react htmlfor is same as for attribute in html, its gives us all the necessary 
    passed by yerlier component lebel tag. means all the validation like id, min value,
    max value, input type, default value like this.
    
    its batter to give id in the input element. here {...props.input} means setting all
    the attributes in id tag.

*/