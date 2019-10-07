import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

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
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

      let persons = null;

      if (this.state.showPersons) {
          persons = (
              <div>
                  {this.state.persons.map((person, index) => {
                      return <Person
                          key={person.id}
                          click={() => this.deletePersonHandler(index)}
                          name={person.name}
                          age={person.age}
                          changed={(event) => this.nameChangedHandler(event, person.id)}
                      />
                  })}
              </div>
          )
      }

      // {/*<Person*/}
      // {/*    name={this.state.persons[0].name}*/}
      // {/*    age={this.state.persons[0].age}*/}
      // {/*/>*/}
      // {/*<Person*/}
      // {/*click={this.switchNameHandler.bind(this, 'Maxi!!!!')}*/}
      // {/*name={this.state.persons[1].name}*/}
      // {/*age={this.state.persons[1].age}*/}
      // {/*changed={this.nameChangedHandler}*/}
      // {/*    >My Hobbies: Racing</Person>*/}
      // {/*<Person*/}
      // {/*    name={this.state.persons[2].name}*/}
      // {/*    age={this.state.persons[2].age}  />*/}

      return(
          <div className="App">
              <h1>Hi, I'm a aReact App</h1>
              <p>This is really working!</p>
              <button
                  style={style}
                  onClick={this.togglePersonsHandler}>Toggle persons
              </button>
              {persons}
          </div>
      );
  }
}


export default App;
