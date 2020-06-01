// imports
import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar'
// Esta es una componente sencillo para entender como se pasa la información a través de React
class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar title={'Hola React'} />
                Soy un componente en React!
            </div>
        )

    }
}
// se exporta de manera default la clase app
export default Contact;
