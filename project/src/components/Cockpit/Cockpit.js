import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import { clearTimeout } from 'timers';
import { request } from 'https';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
        console.log('[Cocpit.js] useEffect Hook')
        // Http request...
        // setTimeout(() => {
        //     alert('Saved data to cloud!')
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
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
                    ref={toggleBtnRef}
                    className={btnClass}
                    onClick={props.btnClicked}>Toggle persons
                </button>
                <button onClick={authContext.login}>Log in</button>
                
        </div>
    )

};

export default React.memo(Cockpit);
