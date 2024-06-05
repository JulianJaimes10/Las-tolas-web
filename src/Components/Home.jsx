import React from 'react'
import '../Styles/Home.css';
import { Image } from 'react-bootstrap';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carouselmanda from '../images/CarouselManda.jpeg';
import CarouselGuata from '../images/CarouselGuata.jpeg';
import CarouselSiamesa from '../images/CarouselSiamesa.jpeg';
import CarouselDonia from '../images/CarouselDonia.jpeg';

export default function Home() {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (
    <div className='img__home__container my-5 py-5'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Image src={ Carouselmanda } className='img__home' />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ CarouselGuata }  className='img__home' />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ CarouselSiamesa } className='img__home' />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ CarouselDonia } text="Third slide" className='img__home' />
          </Carousel.Item>
        </Carousel>
    </div>
  )
}
