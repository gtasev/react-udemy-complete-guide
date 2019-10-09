import React, { useEffect } from 'react';
import classes from './Cockpit.css';
import { clearTimeout } from 'timers';

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cocpit.js] useEffect Hook')
        return () => {
        }
    },[]);

    useEffect(() => {
        console.log('[Cockpit.js] second useEffect')
        return () => {
            console.log('[Cocpit.js] SECONDDDDDD')
        }
    })



    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.red
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold)
    }

    return (
        <div>
            <h1>{props.title}</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button
                className={btnClass}
                    onClick={props.btnClicked}>Toggle persons
                </button>
        </div>
    )

};

export default React.memo(Cockpit);
