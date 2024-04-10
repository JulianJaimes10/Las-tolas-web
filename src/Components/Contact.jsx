import React from 'react'
import { Form } from 'react-bootstrap'
import '../Styles/Contact.css'

export default function Contact() {
  return (
    <div className='form__container'>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico: </Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje: </Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
        <button className='btn'>Enviar</button>
        <p>Déjanos un mensaje por acá y te contestaremos en un correo electrónico o comunicate a través de nuestras redes sociales. </p>
    </div>
  )
}
