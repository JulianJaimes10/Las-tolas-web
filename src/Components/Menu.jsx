import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Styles/Menu.css';

export default function Menu({ products, addProducts }) {

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