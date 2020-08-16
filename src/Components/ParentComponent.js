import React from 'react';
import MainContent from './MainContent';
import MailList from './MailList';
import ProductsComponent from './Products';
import Products from '../Data/Products';
import StartWarsApi from './starwarsApi';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
class Parent extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        const styles = {
            fadeInUp: {
                animation: 'x 1s',
                animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
            }
        }

        const padding = {
            padding:"90px"
        }

        let DisplayLogged
        if (this.state.isLoggedIn === true) {
            DisplayLogged = "Your are logged in as Ayush Naik"
        }
        else {
            DisplayLogged = "Your are not logged in"
        }
        const productsComponent = Products.map(product => <ProductsComponent key={product.id} name={product.name} price={product.price} description={product.description} />)
        if (this.props.isLoading) {
            return (
                <div style={padding} className="container middle">
                    <StyleRoot>
                        <h1 style={styles.bounce}>Loading Content!...</h1>
                    </StyleRoot>
                </div>
            )
        } else {
            return (
                <StyleRoot>
                    <div style={styles.fadeInUp} className="container">
                    <br></br>
                    <br></br>
                    <h2 className="middle">{DisplayLogged}</h2>
                    <br></br>
                    <br></br>
                    <MainContent />
                    <br></br>
                    <br></br>
                    <h1>Mails</h1>
                    <br></br>
                    <br></br>
                    <MailList user={{ name: "Ayush Naik", email: "ayushmnaik@gmail.com" }} />
                    <MailList user={{ name: "Max Jam", email: "thisamail@gmail.com" }} />
                    <MailList user={{ name: "No Name", email: "mikey@gmail.com" }} />
                    <MailList user={{ name: "Julia Robertson", email: "jui@gmail.com" }} />
                    <MailList user={{ name: "Robert Downey", email: "stark@gmail.com" }} />
                    <br></br>
                    <br></br>
                    <h1>Products</h1>
                    <br></br>
                    <br></br>
                    {productsComponent}
                    <h1>Starwars</h1>
                    <StartWarsApi />

                    </div>
                </StyleRoot>
            )
        }
    }

}

export default Parent