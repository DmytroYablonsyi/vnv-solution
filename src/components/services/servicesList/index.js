import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import { initialData } from "../initialData/initialData";
import classes from './services.module.css'
import Button from "../../../buttonComponent/button";
import { CaptionHead } from "../../../captionComponents/caption";



const Services = () => {
    return (
        <>
        <CaptionHead name={"SERVICES"}/>
        <Carousel className={classes.carousel}>
            {
                initialData.map((el) => {
                return(<Carousel.Item key={el.id} className={classes.item}>
                    <Carousel.Caption >
                    <h3>{el.name}</h3>
                    <p>{el.descript}</p>
                    <Button text={"Хочу"}></Button>
                    </Carousel.Caption>
                </Carousel.Item>) 
                })
            }
        </Carousel>
        </>
      );
    
}

export default Services
