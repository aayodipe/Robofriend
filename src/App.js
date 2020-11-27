import React from 'react'
import { useState,useEffect } from 'react';
import './App.css';
import CardList from './component/CardList';
import Searchbox from './component/Searchbox';


export default function App(){
const [robots, setRobots] = useState([]);
const [searchField, setSearchField] = useState('');

const searchChance = e => {
  //  Set the value of the searchField to the event target value
    setSearchField(e.target.value)
}

useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => setRobots(users))

}, [])// only run if robot array changes

//Search for Robots
  const filterRobots = robots.filter(robot => {
    return robot.name.toLowerCase()
    .includes(searchField.toLowerCase())
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
        <Searchbox  searchChance = {searchChance}/>
        <CardList robots= {filterRobots}/>
    </div>
  )
 
 
}


