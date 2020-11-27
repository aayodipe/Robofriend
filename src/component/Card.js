import React from 'react';
import './Card.css'

export default function Card({name, email,id}) {
    return (
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow'>
            <img src ={`https://robohash.org/test/${id}/200X200`}/>
            <div className ='content'>                
                 <h2 className = 'heading'>{name}</h2>
                 <p className = 'email'>{email}</p>
            </div>
        </div>
    )
}
