import React, { PureComponent } from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.persons !== this.props.persons) {
    //         return true;
    //     }else {
    //         return false;
    //     }
    //     console.log('shouldComponentUpdate');
    //     console.log(nextProps);
    //     return true;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        console.log(prevProps);
        console.log(prevState);
        return {message: prevProps};
    }

    componentDidUpdate(prevProps, prevState, snapShot) {  
        console.log('componentDidUpdate');
        console.log(snapShot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering')
        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}
            ><Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
            /></ ErrorBoundary>
        });
    }
}
    

export default Persons;
