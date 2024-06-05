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

  // Initialize the saveBag variable that save in the localStorage the order of customer
  let saveBag = JSON.parse(localStorage.getItem("productsBag")) || [];

  // Initialize the saveTotalPrice variable that save in the localStorage the check
  let saveTotalPrice = JSON.parse(localStorage.getItem("total")) || [];

  // Initialize the productsBag variable with an empty array and declare the setProductsBag method to chance the value when a product is add
  const [productsBag, setProductsBag] = useState(saveBag);

  // Initialize the total variable with a 0 value for the total price to pay and declare the setTotal method to chance the value when a product is add
  const [total, setTotal] = useState(+saveTotalPrice);

  // Update saveBag with customer order data
  saveBag = [...productsBag];
  // Update localStorage with customer order data
  localStorage.setItem("productsBag", JSON.stringify(saveBag));

  //Update saveTotalPrice with customer order data
  saveTotalPrice = total
  //Update localStorage with customer order data
  localStorage.setItem("total", JSON.stringify(saveTotalPrice));

  // Method to add products to the bag
  const addProducts = product => {
    if(productsBag.find(item => item.id === product.id)){
        const productsList = productsBag.map(item => 
            item.id === product.id 
            ? { ...item, quantity: item.quantity + 1, price: product.price * (item.quantity + 1)} 
            : item
        );
        setTotal(total + (product.price * product.quantity))
        return setProductsBag([...productsList])
    }

    setProductsBag([...productsBag, product]);
    setTotal(total + (product.price * product.quantity));
};

  // Method to delete products from bag
  const deleteFromBag = product => {

    const productsList = productsBag.filter(item => item.id !== product.id);
    setProductsBag(productsList);

    const newTotalPrice = productsList.reduce((total, item) => total + item.price, 0);
    setTotal(newTotalPrice);

    saveBag = [...productsList];
};

  return (
    <>
        { /* Render Navigation menu */ }
        <NavbarPage saveBag={ saveBag } total={ total } deleteFromBag={ deleteFromBag } />

        { /* Render current page content */ }
        <BrowserRouter>
          <Routes>
            <Route path='/' element= { <Home /> } />
            <Route path='/AboutUs' element= { <AboutUs /> } />
            <Route path='/Menu' element= { <Menu products={ products } addProducts={ addProducts }/> } />
            <Route path='/Contact' element= { <Contact /> } />
          </Routes>
        </BrowserRouter>

        { /* Render footer */ }
        <Footer />
    </>
  );
}

export default App;
