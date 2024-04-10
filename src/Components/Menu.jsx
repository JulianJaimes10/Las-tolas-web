import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Styles/Menu.css';

export default function Menu({ products }) {

    const addManda = () => { console.log(products.MANDA.name, '$' + products.MANDA.price) };
    //const addMonacha = () => { console.log(products.MONACHA.name, '$' + products.MONACHA.price) };
    //const addGuata = () => { console.log(products.GUATA.name, '$' + products.GUATA.price) };
    //const addDonia = () => { console.log(products.DONIA.name, '$' + products.DONIA.price) };
    //const addSiamesa = () => { console.log(products.SIAMESA.name, '$' + products.SIAMESA.price) };

  return (
    <div className='menu__container'>
        { products.map(product => (
                <Card className='img__menu mx-5 my-3' key={ product.id } >
                    <Card.Img variant="top" src={ `/images/${ product.image }` } alt={ `Imagen ${product.name}` } />
                    <Card.Body>
                        <Card.Title>{ product.name }</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content - ${ product.price }.
                        </Card.Text>
                        <button className='btn' onClick={ addManda }>Agregar</button>
                    </Card.Body>
                </Card>
            )) 
        }
        

        { /*<Card className='img__menu mx-5 my-3'>
            <Card.Img variant="top" src={ monacha } />
            <Card.Body>
                <Card.Title>La Monacha</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <button className='btn' onClick={ addMonacha }>Agregar</button>
            </Card.Body>
        </Card>

        <Card className='img__menu mx-5 my-3'>
            <Card.Img variant="top" src={ guata } />
            <Card.Body>
                <Card.Title>La Guata</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <button className='btn' onClick={ addGuata }>Agregar</button>
            </Card.Body>
        </Card>

        <Card className='img__menu mx-5 my-3'>
            <Card.Img variant="top" src={ donia } />
            <Card.Body>
                <Card.Title>La Doña</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <button className='btn' onClick={ addDonia }>Agregar</button>
            </Card.Body>
        </Card>

        <Card className='img__menu mx-5 my-3'>
            <Card.Img variant="top" src={ siamesa } />
            <Card.Body>
                <Card.Title>La Siamesa</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <button className='btn' onClick={ addSiamesa }>Agregar</button>
            </Card.Body>
        </Card> */ }
    </div>
  )
}