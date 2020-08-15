import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ParentComponent from './Components/ParentComponent'




// function App() {
//   const productsComponent = Products.map(product => <ProductsComponent key={product.id} name={product.name} price={product.price} description={product.description}/>)
//   return (
//     <div>
//       <Header />
//       <MainContent />
//       <MailList user={{name:"Ayush Naik", email:"ayushmnaik@gmail.com"}}/>
//       <MailList user={{name:"Max Jam", email:"thisamail@gmail.com"}}/>
//       <MailList user={{name:"No Name", email:"mikey@gmail.com"}}/>
//       <MailList user={{name:"Julia Robertson", email:"jui@gmail.com"}}/>
//       <MailList user={{name:"Robert Downey", email:"stark@gmail.com"}}/>
//       <br></br>
//       <br></br>
//       <h1 className="container">Products</h1>
//       <br></br>
//       <br></br>
//       {productsComponent}
//       <Footer />
//     </div>
//   );
// }

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      isLoading : true
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading :false
      })
    },500)
  }


  render(){
    return(
      <div>
      <Header />
      <ParentComponent isLoading={this.state.isLoading}/>
      <Footer />
    </div>
    )
  }
}

export default App;
