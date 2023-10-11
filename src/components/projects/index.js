import React from "react"
import classes from './projects.module.css'
import Carousel from 'react-bootstrap/Carousel';
import { CaptionHead } from "../../captionComponents/caption";

const Projects = () => {
    return (
    <>
        {/* <h1 className={classes.head}>PROJECTS</h1> */}
        <CaptionHead name={"PROJECTS"}/>
        <Carousel className={classes.container}>
          <Carousel.Item className={classes.Item}>
          <a href="https://www.learnitlive.com/" target="_blank" rel="noreferrer">
            <img
              className="d-block w-100"
              src={require('./media/picture1.png')}
              alt="img"
            />
            </a>
           
          </Carousel.Item>
          <Carousel.Item>
          <a href="https://volstinyproduction.com/" target="_blank" rel="noreferrer">
            <img
              className="d-block w-100"
              src={require('./media/picture2.png')}
              alt="img"
            />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://irenbanquethall.com/" target="_blank" rel="noreferrer">
            <img
              className="d-block w-100"
              src={require('./media/picture3.png')}
              alt="img"
            />
            </a>
          </Carousel.Item>
        </Carousel>
    </>

      );
}

export default Projects