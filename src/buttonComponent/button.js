import React from "react";
import './button.css'

const Button = (props) => {
    return(
        <>
            <div className="wrap">
                <div className="box">{props.text}</div>
            </div>
        </>
    )
}

export default Button