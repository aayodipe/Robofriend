import React from 'react'
import Card from './Card';
import './CardList.css';



export default function CardList({robots}) {
    return (
        <div className = 'cardlist'>
           {
               robots.map((user, i) => {          
                return  <Card 
                    id = {user.id} 
                    name = {user.name} 
                    email ={user.email} 
                    key = {i}/>
                })
           }
        </div>
    )
}
