import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./GenericModal.module.css"

const Backdrop=(props)=>{
    return <div className={classes.Backdrop} onClick={props.onHide}/>
}


const ModalOverLays=(props)=>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}


const portalElement=document.getElementById("overlays");

const GenericModal=(props)=>{

    return (
        <Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverLays>{props.children}</ModalOverLays>, portalElement)}
        </Fragment>
    )

}

export default GenericModal;