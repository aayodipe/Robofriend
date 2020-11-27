import React from 'react';
import './Searchbox.css'

export default function Searchbox({searchField, searchChance}) {
    
    return (
        <div className = 'pa2'>
            <input type = 'search' className='pa3 ba b--green bg-light-blue search' placeholder ='Search Robot' onChange = {searchChance}/>
        </div>
    )
}
