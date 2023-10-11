import React from "react"
import {WhyUsItem} from "../whyUsItem"
import classes from './about.module.css'
import { initialState } from "../initialData/initialData"
import { CaptionHead } from "../../../captionComponents/caption"


const About = () => {
    return (
    <>
       <CaptionHead name={"WHY US"}/>
        <div className={classes.block}>
            {initialState.map((el) => {
                return <WhyUsItem key={el.id} src={el.src} text={el.text}/>
            })}
        </div>
    </>    
    )
}

export default About