import classes from "./Card.module.css"
const Card=(genericProps)=>{
    return (
        <div className={classes.card}>{genericProps.children}</div>
    )
}

export default Card;