import React from 'react'
import '../Styles/Home.css';
import { Image } from 'react-bootstrap';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import portada from '../images/portada.jpg';

export default function Home() {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (
    <div className='img__home__container'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Image src={ portada } className='img__home' />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ portada }  className='img__home' />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ portada } className='img__home' />
          </Carousel.Item>
        </Carousel>
    </div>
  )
}
