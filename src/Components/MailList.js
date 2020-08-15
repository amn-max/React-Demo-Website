import React from 'react';

// function MailList(props){
//     return(
//         <div className="container">
//             <h6>{props.user.name}</h6>
//             <ul className="userlist">
//                 <li>Email: {props.user.email}</li>
//             </ul>
//             <hr></hr>
//         </div>
//     )
// }



class MailList extends React.Component{
    hover(){
        console.log("Hover on email")
    }
    render(){
        return(
            <div className="container">
            <h6>{this.props.user.name}</h6>
            <ul className="userlist">
                <li onMouseOver={this.hover}>Email: {this.props.user.email}</li>
            </ul>
            <hr></hr>
        </div>
        )
    }
}

export default MailList