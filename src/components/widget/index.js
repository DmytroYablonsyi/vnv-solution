import React from "react";
import classes from './widget.module.css'

const Widget = ({toogleHandle}) => {
    const toggle = () => {
        toogleHandle()
    }
    return(
        <div className={classes.widget}>
            <button onClick={() => toggle()} className={classes.closeIcon}>x</button>
            <p>Вперше на нашому сайті?</p>
            <a href="#">Безкоштовна консультація</a>
        </div>
    )
}

export default Widget