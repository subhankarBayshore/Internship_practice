import "./CardCSS.css"

function Card(componentsProps){

    let classes="card"+" "+ componentsProps.className;

    return (       
        <div className={classes}>{componentsProps.children}</div>
    )
}

export default Card;