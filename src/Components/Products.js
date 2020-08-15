import React from 'react';

// function Products(props){
//     return(
//         <div className="container">
//             <h4>{props.name}</h4>
//             <p>${props.price+" - "+props.description}</p>
//         </div>
//     )
// }

class Products extends React.Component{
    render(){
        return(
            <div className="container">
                <h4>{this.props.name}</h4>
                <p>${this.props.price+" - "+this.props.description}</p>
            </div>
        )
    }
}

export default Products