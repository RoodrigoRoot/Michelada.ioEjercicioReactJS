import React, { Component } from 'react'
import ItemsFront from './ItemsFront'
import ItemsBack from './ItemsBackend'
import Search from'../Search/Search'
import './Stack.css'

class Stack extends Component {
constructor(props){
    super(props)

    this.state = {
        frontend: [
            { nombre: '¿Qué es HTML?', imageURL: 'https://www.formulaclick.com/wp-content/uploads/2016/06/html5.jpg' },
            { nombre: 'CSS desde cero', imageURL: 'http://www.cristalab.com/images/blog/css3-logo.png' },
            { nombre: 'Frontend básico', imageURL: 'https://cdn.wccftech.com/wp-content/uploads/2016/10/Front-End-Development-Bundle.jpg' },
            { nombre: 'Preprocesadores CSS', imageURL: 'http://l4c.me/uploads/pre-procesadores-1385326266_full550.jpg' }
        ],
        backend: [
            { nombre: 'Django', imageURL: 'https://cdn-images-1.medium.com/max/2600/1*25Le7KoMK_z6BIaM8x74RA.png' },
            { nombre: 'Declarar Variables', imageURL: 'https://cdn-images-1.medium.com/max/2600/1*25Le7KoMK_z6BIaM8x74RA.png' },
            { nombre: 'Integración de Boostrap', imageURL: 'https://cdn-images-1.medium.com/max/2600/1*25Le7KoMK_z6BIaM8x74RA.png' },
            { nombre: 'Llamadas HTTP', imageURL: 'https://cdn-images-1.medium.com/max/2600/1*25Le7KoMK_z6BIaM8x74RA.png' }
        ]

    }
}
    renderItems = (frontend) => {
        return frontend.map((item, index) => <ItemsFront key={index} front={item}> </ItemsFront>)
    }
    renderItemsB = (backend) => {
        return backend.map((item, index) => <ItemsBack key={index} back={item}> </ItemsBack>)
    }
    render() {

        let { frontend } = this.state
        let { backend } = this.state
        return (
            <section>
                <Search/>
                <h2>Frontend</h2>
                <div className="Container">
                    {this.renderItems(frontend)}
                </div>
                <h2>Backend</h2>
                <div className="Container">
                    {this.renderItemsB(backend)}
                </div>
            </section>
        )
    }

}

export default Stack