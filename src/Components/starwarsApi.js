import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretRight,faCaretDown} from '@fortawesome/free-solid-svg-icons';


class StarwarsApi extends React.Component{
    constructor(){
        super()
        this.state ={
            Drop:false,
            loading: false,
            character: {},
            filmsList:[]
        }
        this.characterDrop = this.characterDrop.bind(this)
    }

    componentDidMount(){
        this.setState({
            loading:true
        })
        fetch("https://swapi.dev/api/people/1")
            .then(response => response.json())
            .then(data => {
                let i
                var a = []
                for(i in data.films){
                    fetch(data.films[i]).then(response => response.json())
                    .then(m => {
                        a.push(m.title)
                    })
                }
                console.log(a)
                console.log(data)
                this.setState({
                    character:data,
                    filmsList:a
                })
            })
    }

    characterDrop(){
        this.setState(prevState =>{
            return{
                Drop:!prevState.Drop
            }
        })
    }
    
    render(){
        const characterStyle = {
            cursor : "pointer",
            background:"#2196f3",
            padding: "8px",
            borderRadius:"12px"
        }

      

        const ListfilmsComponent = this.state.filmsList.map(item => <p style={{marginLeft:100}} key={this.state.filmsList.indexOf(item)}>{item}</p>)

        return(
                <div className="container" style={{paddingBottom:50}}>
                    {
                        this.state.loading && 
                        <div>
                            <div>
                    <h4 style={characterStyle} onClick={this.characterDrop}>{!this.state.Drop?<FontAwesomeIcon icon={faCaretRight} size="lg" />:<FontAwesomeIcon icon={faCaretDown} size="lg" /> }{this.state.character.name}</h4>
                            </div>
                            {
                                this.state.Drop &&
                                <div className="jumbotron character-details">
                                    <p>Gender : <span>{this.state.character.gender}</span></p>
                                    <p>Mass : <span>{this.state.character.mass}</span></p>
                                    <p>Eye Color : <span>{this.state.character.mass}</span></p>
                                    <p>Movies : </p>
                                    {ListfilmsComponent}
                                </div>
                            }  
                        </div>
                    }
                </div>
        )
    }
}

export default StarwarsApi