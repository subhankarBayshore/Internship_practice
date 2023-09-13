import { useRef , useState } from "react"
import GenericInput from "../../UI/GenericInput"

import classes from "./MealForm.module.css"

const MealItemForm=(MealItemProps)=>{

    const [validEnteredAmount,setValidEnteredAmount]=useState(true);

    const amountInputRef=useRef();

    const submitHandler=(event)=>{
        event.preventDefault();
        
        const enteredAmount= amountInputRef.current.value; 

        const enteredAmountFromStringToNumber= +enteredAmount;

        //validation check
        if(enteredAmount.trim().length===0 || enteredAmountFromStringToNumber < 1 || enteredAmountFromStringToNumber > 5)
        {
            setValidEnteredAmount(false);
            return;
        }

        MealItemProps.onAddToCart(enteredAmountFromStringToNumber);

    }
    console.log(amountInputRef);

    return (

        <form className={classes.form} onSubmit={submitHandler}>
            <GenericInput  ref={amountInputRef} label="Amount" input={{
                id:"amount",
                type:"number",
                min: "1",
                max: "5",
                defaultValue: "1"
            }}/>
            <button>+</button>
            {!validEnteredAmount && <div>Please Enter a valid amount (1 to 5)</div>} 
        </form>       
    )
}

export default MealItemForm;

/* 
    here <InputAmount /> is a reuseable component, we are jast passing the mandatory attributes 
    which needed for our poject purpose, and it's batter that passing all the attributes via 
    object , instead of passing one by one attributes.
*/