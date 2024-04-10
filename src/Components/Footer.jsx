import React from 'react';
import { Image } from 'react-bootstrap';
import '../Styles/Footer.css';
import whatsapp from '../images/logo-whatsapp.png';
import instagram from '../images//logo-instagram.png';
import facebook from '../images/logo-facebook.png';

export default function Footer() {
  return (
    <>
        <footer>
          <div className='apps__container'>
              <h2>Encuentranos en: </h2>
              <Image src= { whatsapp } alt='Logo de Whatsapp' className='img__footer' />
              <Image src= { instagram } alt='Logo de Instagram' className='img__footer' />
              <Image src= { facebook } alt='Logo de Facebook' className='img__footer' />
          </div>
          <p> Estamos ubicados en la Transversal 4 # 4E - 15 Barrio La Ceiba, Cucuta, Nort de Santander</p>
          <p> © 2024 Todos los derechos reservados</p>
        </footer>
    </>
  )
}

