import { Component } from 'react';
import './App.css';
import CardList from './component/CardList';
import Searchbox from './component/Searchbox';



class App extends Component {
constructor(){
  super();
  this.state = {
    robots: [],
    searchField :''
  }
}
 searchChance = e => {
  //  Set the value of the searchField to the event target value
    this.setState({searchField: e.target.value})
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots:users}))
}

render(){
  const {robots, searchField} = this.state;
  const filterRobots = robots.filter(robot=>{
    return (
      robot.name.toLowerCase()
      .includes(searchField.toLowerCase())
    )
  })
// Display loading icon when robot is empty
return !robots.length ?
    (   
    <div class="loadingio-spinner-ripple-lugqw9fpz88">
        <div class="ldio-tlm1xm1qwka">
            <div></div>
            <div></div>
        </div>
    </div>
    ):(
    <div className="tc">
      <h1>RobotFriends</h1>
        <Searchbox  searchChance = {this.searchChance}/>
        <CardList robots= {filterRobots}/>
    </div>
  )
 
 
}
}


export default App;
