import React from 'react'
import './Char.css'

const char = (props) => {
    return(
        <div onClick={props.removeChar} className='charComponent'>
            {props.character}
        </div>
    )
};

export default char;
