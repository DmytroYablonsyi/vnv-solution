import React from "react"
import classes from './logo.module.css'
import Button from "../../buttonComponent/button"


const Logo = () => {
    return (
        <header className={classes.logo}>
            <img className={classes.logoImg} src=" https://vnv.solutions/img/vnv%20logo-05.png" alt="VNV"></img>
            <div className={classes.logoName} >Easy Solution</div>
            <Button text="Замовити"/>
    </header>
    )
    
}

export default Logo 