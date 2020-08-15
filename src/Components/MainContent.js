import React from 'react';
import { Button } from 'react-bootstrap';
import TodosComponent from './todosComponent';
import TodosData from '../Data/todosData';

// function MainContent(){
//        var date = new Date()
//        var hours = date.getHours();
//        var min = date.getMinutes();
//        var sec = date.getSeconds();
//        var day = date.getDay();
//        var ampm = "AM";

//        if(hours>12){
//             ampm = "PM";
//        }

//        switch(day){
//            case 1:day = "Monday"
//                 break;
//             case 2:day = "Tuesday"
//             break;

//             case 3: day = "Wednesday"
//             break;

//             case 4: day = "Thursday"
//             break;

//             case 5: day = "Friday"
//             break;

//             case 6: day = "Saturday"
//             break;

//             case 0: day = "Sunday"
//             break;

//             default:day = "Error"
//        }
//     return(
//         <div className="container">
//         <h4>Places I want to visit</h4>
//         <ul className="list">
//             <li><Button variant="primary">Tokyo</Button></li>
//             <li><Button variant="success">Seoul</Button></li>
//             <li><Button variant="danger">USA</Button></li>
//         </ul>
//         <main>
//     <p>Today is {day+", "+hours%12+":"+min+":"+sec+" "+ampm}</p>
//         </main>
//         </div>
//     )
// }

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date(),
            todos: TodosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState =>{
            const updatedTodos = prevState.todos.map(todo =>{
                if(todo.id === id){
                    return{
                        ...todo,
                        completed:!todo.completed
                    }
                }
                return todo
            })
            return{
                todos: updatedTodos
            }
        })
    }


    render() {
        const todoComponent = this.state.todos.map(todo => <TodosComponent key={todo.id} item={todo} handleChange={this.handleChange}/>)
        return (
            <div className="container">
                <div className="row">
                <div className="container col-lg-5 middle border">
                    <h4>Places I want to visit</h4>
                    <ul className="list">
                        <li><Button variant="primary">Tokyo</Button></li>
                        <li><Button variant="success">Seoul</Button></li>
                        <li><Button variant="danger">USA</Button></li>
                    </ul>
                    <main>
                        <p>Today is  {this.state.date.toLocaleTimeString()}</p>
                    </main>
                </div>
                <div className="container col-lg-5 middle border">
                    <h4>TODOS List</h4>
                    {todoComponent}
                </div>
            </div>
            </div>
        )
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
    }
}

export default MainContent;