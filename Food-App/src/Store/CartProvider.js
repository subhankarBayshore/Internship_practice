import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState={
    items:[],
    totalamount:0
}

const reducer=(state,action)=>{
    if(action.type==="ADD")
    {
        const updatedTotalAmount= state.totalamount + action.item.price * action.item.amount;

        const existingCartItemIndex=state.items.findIndex(item=>
            (item.id===action.item.id))

        const existingCartItem=state.items[existingCartItemIndex];
        let updatedItems;

        if(existingCartItem)
        {
            const updatedItem={
                ...existingCartItem,
                amount:existingCartItem.amount+action.item.amount
            }
            updatedItems=[...state.items]
            updatedItems[existingCartItem]=updatedItem;
        }
        else
        {
            updatedItems=state.items.concat(action.item);
        }

        
        return {
            items: updatedItems,
            totalamount: updatedTotalAmount
        }
    }
    else if(action.type==="REMOVE")
    {
        const existingCartItem=state.items.findIndex(item=> item.id===action.item.id)

        const existingItem=state.items[existingCartItem];
        const updatedTotalAmount= state.totalamount-existingItem.price;

        let updatedItems;
        if(existingItem.amount===1)
            updatedItems=state.items.filter(item=>item.id !== action.item.id)
        else
        {
            //state.items[existingCartItem]=existingItem.amount-action.item.amount;
            const updatedItem={...existingItem, amount:existingItem.amount-1};
            updatedItems=[...state.items];
            updatedItems[existingCartItem]=updatedItem;
        }

        return {
            items:updatedItems,
            totalamount:updatedTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider=(props)=>{

    const [cartState,dispatchCartAction]=useReducer(reducer,defaultCartState);

    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type: "ADD", item: item})
    };

    const removeItemFromCartHandler=(id)=>{
        dispatchCartAction({type: "REMOVE", id: id})
    }

    const cartContext={
        items: cartState.items,
        totalamount: cartState.totalamount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider;