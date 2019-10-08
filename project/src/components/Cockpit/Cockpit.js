import React from 'react';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'red',
        color: 'black',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'salmon',
            color: 'black'
        }
    };

    if (props.showPersons) {
        style.backgroundColor =  'green';
        style[':hover'] = {
            backgroundColor: 'lightgreen',
            color: 'white'
        };
        style.color =  'white';
    }

    let classes = [];
    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold')
    }

    return (
        <div>
            <h1>Hi, I'm a aReact App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                style={style}
                onClick={props.btnClicked}>Toggle persons
            </button>
        </div>
    )

};

export default cockpit;
