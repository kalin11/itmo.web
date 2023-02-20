import React from "react";
import classes from "./Modal.module.css";
const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.myModel];

    if (visible){
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModelContent} onClick={(e) => {e.stopPropagation(); }}>
                {children}
            </div>
        </div>
    )
}

export default Modal;