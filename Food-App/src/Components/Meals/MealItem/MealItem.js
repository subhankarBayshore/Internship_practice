import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/CartContext";

import classes from "./MealItem.module.css"

const MealItem=(availableMealsProps)=>{
//    const price=availableMealsProps.price.toFixed(2)

    const cartCtx=useContext(CartContext);

    const addAmountToCart= amount =>{
        cartCtx.addItem({
            id: availableMealsProps.id,
            name: availableMealsProps.name,
            amount: amount,
            price: availableMealsProps.price
        });
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{availableMealsProps.name}</h3>
                <div className={classes.description}> {availableMealsProps.description} </div>
                <div className={classes.price}> {availableMealsProps.price} </div>
            </div>
            <div>
                <MealItemForm onAddToCart={addAmountToCart}/>
            </div>
        </li>
    )
}

export default MealItem;