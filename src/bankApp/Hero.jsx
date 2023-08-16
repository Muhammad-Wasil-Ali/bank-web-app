import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import home1 from "./assets/home1.jpg"
import home2 from "./assets/Home2.jpg"
import home3 from "./assets/home3.png"
import "./styles/hero.css"

const Hero = () => {
  return (
    <>
       <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home3}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home1}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home2}
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Hero
