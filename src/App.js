import NavbarPage from './Components/NavbarPage';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import products from './Products.json';
import { useState } from 'react';

function App() {

  // Initialize the productsBag variable with an empty array and declare the setProductsBag method to chance the value when a product is add
  const [productsBag, setProductsBag] = useState([]);
  // Initialize the total variable with a 0 value for the total price to pay and declare the setTotal method to chance the value when a product is add
  const [total, setTotal] = useState(0)

  return (
    <>
        { /* Render Navigation menu */ }
        <NavbarPage productsBag={ productsBag } total={ total } />

        { /* Render current page content */ }
        <BrowserRouter>
          <Routes>
            <Route path='/' element= { <Home /> } />
            <Route path='/AboutUs' element= { <AboutUs /> } />
            <Route path='/Menu' element= { <Menu products={ products } productsBag={ productsBag } setProductsBag={ setProductsBag } total={ total } setTotal={ setTotal } /> } />
            <Route path='/Contact' element= { <Contact /> } />
          </Routes>
        </BrowserRouter>

        { /* Render footer */ }
        <Footer />
    </>
  );
}

export default App;
