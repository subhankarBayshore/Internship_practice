import classes from "./MealsSummary.module.css"

const MealsSummary=()=>{

    return (
        <section className={classes.summary}>
            <h1>Flat 50%</h1> 
            <h3>off in your first order</h3> 
            <h3>use cuppon code 'smoked&grilledfirstorder'</h3> 
        </section>
    )
}

export default MealsSummary;