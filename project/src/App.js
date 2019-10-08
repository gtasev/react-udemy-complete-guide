import React, {Component} from 'react';
import Radium, { StyleRoot } from "radium";
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
        {id: 'nesto1', name: "Max" , age: "28"},
        {id: 'nesto2', name: "Manu" , age: "29"},
        {id: 'nesto3', name: "Stephanie" , age: "26"}
    ],
      otherState: 'some other value',
      showPersons: false
  };

  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex((per) => {
          return per.userId === id
      });

      const person = {...this.state.persons[personIndex]};

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons: persons})
  };

    togglePersonsHandler = () => {
        const currentState = {...this.state};
        currentState.showPersons = !currentState.showPersons;
        this.setState(currentState);
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

  render() {
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

      let persons = null;

      if (this.state.showPersons) {
          persons = (
              <div>
                  {this.state.persons.map((person, index) => {
                      return <ErrorBoundary key={person.id}
                      ><Person
                          click={() => this.deletePersonHandler(index)}
                          name={person.name}
                          age={person.age}
                          changed={(event) => this.nameChangedHandler(event, person.id)}
                      /></ ErrorBoundary>
                  })}
              </div>
          );
          style.backgroundColor =  'green';
          style[':hover'] = {
              backgroundColor: 'lightgreen',
              color: 'white'
          };
          style.color =  'white';
      }

      let classes = [];
      if (this.state.persons.length <= 2) {
          classes.push('red');
      }
      if (this.state.persons.length <= 1) {
          classes.push('bold')
      }

      return(
          <StyleRoot>
              <div className="App">
                  <h1>Hi, I'm a aReact App</h1>
                  <p className={classes.join(' ')}>This is really working!</p>
                  <button
                      style={style}
                      onClick={this.togglePersonsHandler}>Toggle persons
                  </button>
                  {persons}
              </div>
          </StyleRoot>
      );
  }
}


export default Radium(App);
