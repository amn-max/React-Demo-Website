import React from 'react';
import MessageDisplay from './MessageDisplay'
import {Dropdown} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {faSignInAlt , faBars} from '@fortawesome/free-solid-svg-icons'
// function Header(){
//     return(
//         <nav>
//             <h2 className="container-fluid head-text">Ayush Naik</h2>
//         </nav>
//     )
// }

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: [
                "Complete Drone",
                "Build and test website",
                "Learn Node.js",
                "Create an app(android) and upload it to playstore"
            ],
            messageRead: false,
            showDropDown: false,
            isLoggedIn: false
        }

        this.userToggle = this.userToggle.bind(this)
    }


    userToggle(){
        this.setState(prevState => {
            return{
                isLoggedIn : !prevState.isLoggedIn
            }
        })
    }

    render() {
        var Allmessages = this.state.unreadMessages.map(mesg => <MessageDisplay key={this.state.unreadMessages.indexOf(mesg)} thismessage={mesg} />)

        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <h1 className="navbar-brand">Ayush Naik</h1>
                    <div className="navbar-rightSide">
                        <button onClick={this.handleMessageClick} className="btn btn-primary notificationContainer dropdown" style={{ borderRadius: 2 }}>
                            <p className="container middle" style={{ margin: 0, padding: 2 }}>Notifications <FontAwesomeIcon style={{marginLeft:5}} icon={faCaretDown}></FontAwesomeIcon></p>
                            {
                                this.state.unreadMessages.length > 0 && !this.state.messageRead ?
                                    <span className="notificationBadge">
                                        {this.state.unreadMessages.length}+
                                </span> :
                                    null
                            }
                            {
                                this.state.unreadMessages.length > 0 ?
                                <div className="dropdown-content">

                                    <div>
                                        {Allmessages}
                                    </div>

                                </div>:
                                <div className="dropdown-content">

                                <div>
                                    <p>You have no unread messages</p>
                                </div>

                                </div>
                            }
                        </button>
                        <button onClick={this.userToggle} className="btn btn-danger" style={{marginLeft:8, borderRadius: 2}} >
                        {
                            this.state.isLoggedIn?
                            <p className="container middle" style={{ margin: 0, padding: 2 }}>Login <FontAwesomeIcon style={{marginLeft:5}} icon={faSignInAlt}></FontAwesomeIcon></p>:
                            <p className="container middle" style={{ margin: 0, padding: 2 }}>Logout <FontAwesomeIcon style={{marginLeft:5}} icon={faSignInAlt}></FontAwesomeIcon></p>
                        }
                        </button>
                    </div>
                    <div className="hamburger">
                        <Dropdown>
                            <Dropdown.Toggle>
                                <FontAwesomeIcon icon={faBars} size="lg" style={{color:"white"}}></FontAwesomeIcon>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                <button onClick={this.userToggle} className="btn btn-danger" style={{marginLeft:8, borderRadius: 2}} >
                                {
                                this.state.isLoggedIn?
                                    <p className="container middle" style={{ margin: 0, padding: 2 }}>Login <FontAwesomeIcon style={{marginLeft:5}} icon={faSignInAlt}></FontAwesomeIcon></p>:
                                    <p className="container middle" style={{ margin: 0, padding: 2 }}>Logout <FontAwesomeIcon style={{marginLeft:5}} icon={faSignInAlt}></FontAwesomeIcon></p>
                                }
                                </button>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
