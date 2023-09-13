import SignInIcon from "./SignInIcon"
import classes from "./HeaderSignIn.module.css"

const HeaderSignIn=(headerProps)=>{
    return (
        <div className={classes.button}>
            <span className={classes.icon}>
                <SignInIcon />
            </span>
            <span>Sign in</span>
        </div>
    )
}

export default HeaderSignIn;