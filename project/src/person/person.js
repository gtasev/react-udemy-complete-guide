import React from 'react';
import '../App.css';

function Person(props) {
    return(
        <div className='person'>
            <h1>{props.name}</h1>
            <p>Your Age: {props.age}</p>
        </div>
    );
}


export default Person;
