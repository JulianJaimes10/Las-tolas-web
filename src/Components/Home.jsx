import React from 'react'
import '../Styles/Home.css';
import { Image } from 'react-bootstrap';
import imgHome from '../images/portada-facebook.jpg';

export default function Home() {
  return (
    <div className='img__home__container my-5 py-5'>
        <Image src= { imgHome } alt='imagen de la página de inicio' className='img__home' />
    </div>
  )
}
