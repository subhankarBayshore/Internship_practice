import { useContext,Fragment } from "react"
import CartIcon from "./CartIcon"
import SignInIcon from "./SignInIcon"
import CartContext from "../../Store/CartContext"
import classes from "./HeaderCart.module.css"

const HeaderCart=({onClick,onClick1})=>{

    const cartCntx=useContext(CartContext);

    const numberOfCartItems=cartCntx.items.reduce((curNumber, item)=>{
        return curNumber+ item.amount;
    },0)

    return (
        <Fragment>
        <div className={classes.button}>
            <span className={classes.icon} onClick={onClick1}>
                <SignInIcon />
            </span>
            <span onClick={onClick1}>Sign in &nbsp; &nbsp;</span>

            <span className={classes.icon} onClick={onClick}>
                <CartIcon />
            </span>
            <span onClick={onClick}>Cart</span>
            <span className={classes.badge} onClick={onClick}>{numberOfCartItems}</span>
        </div>
        </Fragment>
    )
}

export default HeaderCart;


// onClick={headerProps.onClick}