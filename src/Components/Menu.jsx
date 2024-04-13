import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Styles/Menu.css';
import { useState } from 'react';

export default function Menu({ products }) {

    // Initialize the productsBag variable with an empty array and declare the setProductsBag method to chance the value when a product is add
    const [productsBag, setProductsBag] = useState([]);

    const addProducts = product => {
        console.log(product);
        if(productsBag.find(item => item.id === product.id)){
            const productsList = productsBag.map(item => 
                item.id === product.id 
                ? { ...item, quantity: item.quantity + 1, price: product.price * (item.quantity + 1)} 
                : item
            );
            return setProductsBag([...productsList])
        }
        setProductsBag([...productsBag, product]);
    };
    console.log(productsBag)

  return (
    <div className='menu__container'>
        { products.map(product => (
                <Card className='img__menu mx-5 my-3' key={ product.id } >
                    <Card.Img variant="top" src={ `burgers/${ product.image }` } alt={ `Imagen ${product.name}` } />
                    <Card.Body>
                        <Card.Title>{ product.name }</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content - ${ product.price }.
                        </Card.Text>
                        <button className='btn' onClick={ () => addProducts(product) }>Agregar</button>
                    </Card.Body>
                </Card>
            )) 
        }
    </div>
  )
}