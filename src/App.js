import NavbarPage from './Components/NavbarPage';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import products from './Products.json';

function App() {

  return (
    <>
        { /* Aquí se renderiza el menú de navegación */ }
        <NavbarPage />

        { /* Aquí se renderiza el contenido actual de la página */ }
        <BrowserRouter>
          <Routes>
            <Route path='/' element= { <Home /> } />
            <Route path='/AboutUs' element= { <AboutUs /> } />
            <Route path='/Menu' element= { <Menu products={ products } /> } />
            <Route path='/Contact' element= { <Contact /> } />
          </Routes>
        </BrowserRouter>

        { /* Aquí se renderiza el pié de página */ }
        <Footer />
    </>
  );
}

export default App;
