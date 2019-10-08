import React, {Component} from 'react';
import Radium, { StyleRoot } from "radium";
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

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
      const personIndex = this.state.persons.findIndex(per => per.id === id);

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
      let persons = null;

      if (this.state.showPersons) {
          persons = (
              <div>
                  <Persons
                      persons={this.state.persons}
                      clicked={this.deletePersonHandler}
                      changed={this.nameChangedHandler}
                  />
              </div>
          );
      }

      return(
          <StyleRoot>
              <div className="App">
                  <Cockpit
                      persons={this.state.persons}
                      showPersons={this.state.showPersons}
                      btnClicked = {this.togglePersonsHandler}
                  />
                  {persons}
              </div>
          </StyleRoot>
      );
  }
}


export default Radium(App);
