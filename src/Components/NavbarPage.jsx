import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import '../Styles/Navbarpage.css'
import imgNavigation from '../images/Logo-Las-Tolas-Amarillo.png'
import bolsa from '../images/bolsa.svg';

function NavbarPage() {
  return (
    <div className='col-12'>
      <Navbar expand="lg" fixed='top' className="navbar-container">
        <Container className='container'>
          <Image src= { imgNavigation } id='img__navigation' />
          <Navbar.Brand href="/" id='font-navigation'>Las Tolas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto px-3">
              <Nav.Link><Image src={ bolsa } /></Nav.Link>
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