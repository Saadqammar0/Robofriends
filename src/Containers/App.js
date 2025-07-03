import React, { Component } from "react";
import Cardlist from "../Components/Cardlist";
import Scroll from '../Components/Scroll.js'
import Searchbox from "../Components/Searchbox.js";
import './App.css';

class App extends Component {
 constructor(){
    super()
    this.state={                   //smart component 
        robots: [],
        searchfield: ''

    } 
 }
onSearchChange = (event) => {

 // console.log(event.target.value); 
 this.setState({ searchfield: event.target.value });
}
 componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
        return response.json();
    }).then(users => {
        this.setState({ robots: users });
    }).catch(err => {
        console.error('Error fetching robots:', err);
    }); 
 }
    render(){
 const { robots, searchfield } = this.state; //destructuring
     const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
       });

    if (!robots.length) {
        return <h1 className='tc'>Loading...</h1>;
    }
    else{
    return (
        <div className='tc'>
            <h1 className="f1">RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange}/>   <br />
           <Scroll>
      <Cardlist robots={filteredRobots} /> 
           </Scroll>
        </div>);}
 }   
}

export default App;