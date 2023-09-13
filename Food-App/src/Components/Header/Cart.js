import React, { useContext } from "react";
import GenericModal from "../UI/GenericModal"
import classes from "./Cart.module.css";
import CartContext from "../../Store/CartContext";

const Cart=(appProps)=>{

    const cartCntx=useContext(CartContext);

    const hasItems=cartCntx.items.length>0

    const cartContextAddHandler= (item) =>{
        cartCntx.addItem(item);
    }

    const cartContextRemoveHandler= (id) =>{
        cartCntx.removeItem(id);
    }


    const cartItem=<ul className={classes["cart-items"]}>
                        {cartCntx.items.map(x=>
                            <li>{x.name}</li>
                        )}
                   </ul>

    return (
        <GenericModal onHide={appProps.onHideCart}>
            {cartItem}
            <div className={classes.total}>
                <span>Amount</span>
                <span>{cartCntx.totalamount}</span>
            </div>
            <div className={classes.action}>
                <button className={classes["button--alt"]} onClick={appProps.onHideCart}>close</button>
                {
                    hasItems && <button className={classes.button}>order</button>
                }
                
            </div>
        </GenericModal>
    )
}

export default Cart;