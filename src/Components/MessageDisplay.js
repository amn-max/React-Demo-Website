import React from 'react';

class MessageDisplay extends React.Component{
    render(){
        return(
            <div style={{borderBottom:"1px solid gray",margin:0,padding:0}} className="container-fluid">
                <p style={{padding:0,marginLeft:20,marginRight:20}}>{this.props.thismessage}</p>
            </div>
        )
    }
}

export default MessageDisplay