import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"

import classes from "./AvailableMeals.module.css"


let arr=[
    {
        id: "1",
        name: "Chicken Biriyani",
        description: "Enjoy othentic kolkata style chicken biriyani",
        price: 150
    },
    {
        id: "2",
        name: "Chicken Tikka Masala",
        description: "Delicious chicken tikka masala with 8 pieces of boneless chicken",
        price: 200
    },
    {
        id: "3",
        name: "Chicken Tikka",
        description: "Delicious chicken tikka with 6 pieces of boneless chicken",
        price: 150
    },
    {
        id: "4",
        name: "Mutton Biriyani",
        description: "Enjoy othentic kolkata style Mutton biriyani",
        price: 180
    }
]


const AvailableMeals=()=>{
//    const currentMeals=arr.map(x=> <MealItem arrVariable={x}/>) /* outher way of passing in down in this page */

const currentMeals=arr.map(x=> 
                            <MealItem
                                key={x.id}
                                id={x.id}
                                name={x.name} 
                                description={x.description} 
                                price={x.price} 
                            />)

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {currentMeals}
                </ul>
            </Card>
        </section>
    )

}

export default AvailableMeals;


/*
    different way:

    const currentMeals=arr.map(x=> <MealItem key={x.id} name={x.name} description={x.description} price={x.price} />)
*/