import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { img } from "./img/data" 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Carousel.module.css';
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoplay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => {
          return <img key={index} src={imageItemLink} alt={`carousel-image-${index}`} />
        })}
      </Carousel>
      <div className={classes.hero__img}>

      </div>
    </div>
  );
}

export default CarouselEffect;


