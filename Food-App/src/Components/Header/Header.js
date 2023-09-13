import HeaderCart from "./HeaderCart"
import HeaderSignIn from "./HeaderSignIn"

import grilled from "../../Picture/grilled.jpg"
import classes from "./Header.module.css"

const Header=({onShowCart, onSignIn})=>{

    return (
        <div>
        <header className={classes.header}>
            <h2>Smoked &nbsp; && &nbsp; Grilled</h2>
            {/* <button><HeaderSignIn /></button> */}
            {/* <HeaderSignIn /> */}
            <HeaderCart onClick={onShowCart} onClick1={onSignIn}/>
        </header>
        <div className={classes[ "main-image" ]}>
            <img src={grilled} alt="Dilicious Tikka image"/>
        </div>
        </div>
    )
}

export default Header;