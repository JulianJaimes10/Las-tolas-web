import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import '../Styles/Navbarpage.css'
import imgNavigation from '../images/Logo-Las-Tolas-Amarillo.png'
import bag from '../images/bolsa.svg';
import imgDelete from '../images/borrar.png';
import { useState } from 'react';

function NavbarPage({ saveBag, total, deleteFromBag }) {

  // This hook initialize the active variable with a false value and declare the setActive method to change active value
  const [active, setActive] = useState(false);

  // Method to show or hidden the bag
  const showBag = () => {
    setActive(!active);
  };

  return (
    <div className='col-12'>
      <Navbar expand="lg" fixed='top' className="navbar-container">
        <Container className='container'>
          <Image src= { imgNavigation } id='img__navigation' />
          <Navbar.Brand href="/" id='font-navigation'>Las Tolas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto px-3">
              <Nav.Link>
                <Image src={ bag } onClick={ showBag } />
                { active ? (
                  <>
                    <div className='product-list-bag'>
                      { saveBag.map(product => (
                        <div className='products-in-bag' key={ product.id }>
                          <div className='info-product'>
                            <span className='quantity-products-bag'>{ product.quantity }</span>
                            <p className='product-name'>{ product.name }</p>
                            <span className='product-price'>${ product.price }</span>
                          </div>
                          <img src={ imgDelete } alt="Delete icon" onClick={ () => deleteFromBag(product) } />
                        </div>
                      )) }
                      <div className='total-price-pay'>Total: ${ total }</div>
                    </div>
                  </>)
                  : '' }
              </Nav.Link>
              <Nav.Link className="pages__link" href="/">Inicio</Nav.Link>
              <Nav.Link className="pages__link" href="./AboutUs">¿Quienes Somos?</Nav.Link>
              <Nav.Link className="pages__link" href="./Menu">Menú</Nav.Link>
              <Nav.Link className="pages__link" href="./Contact">Contáctanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarPage;