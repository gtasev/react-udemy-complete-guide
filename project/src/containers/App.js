import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import AuthContext from '../context/auth-context'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {id: 'nesto1', name: "Max" , age: 28},
                {id: 'nesto2', name: "Manu" , age: 29},
                {id: 'nesto3', name: "Stephanie" , age: 26}
            ],
              otherState: 'some other value',
              showPersons: false,
              showCockpit: true,
              changeCounter: 0,
              authenticated: false,
        }
        console.log('[App.js] constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props)
        return state
    }
    
    componentDidMount() {
    console.log('[App.js] component did mount')
    }


  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(per => per.id === id);

      const person = {...this.state.persons[personIndex]};

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState((prevState, props) => {
          return {
            persons: persons,
            changeCounter: prevState.changeCounter + 1
          }
        })
  };

    togglePersonsHandler = () => {
        console.log()
        const currentState = {...this.state};
        currentState.showPersons = !currentState.showPersons;
        this.setState(currentState);
    };
    
    removeCockpitHandler = () => {
        const currentState = {...this.state};
        currentState.showCockpit = !currentState.showCockpit;
        this.setState(currentState);
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    shouldComponentUpdate() {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] component did update')
    }

    loginHandler = () => {
        this.setState({authenticated: true});
    }

  render() {

    console.log('[App.js] rendering')
    
      let persons = null;

      if (this.state.showPersons) {
          persons = (
              <div>
                  <Persons
                      persons={this.state.persons}
                      clicked={this.deletePersonHandler}
                      changed={this.nameChangedHandler}
                      isAutheticated={this.state.authenticated}
                  />
              </div>
          );
      }

      return(
            <div className={classes.App}>
                <button onClick={this.removeCockpitHandler}>Remove Cockpit</button>
                <AuthContext.Provider 
                    value={{            // we provide initial values here. Inital values that are initialiezed in AuthContext function are taken as default only if we dont supply here nothing
                        authenticated: this.state.authenticated,
                        login: this.loginHandler
                    }}
                >
                    {this.state.showCockpit ? <Cockpit
                        title={this.props.appTitle}
                        personsLength={this.state.persons.length}
                        showPersons={this.state.showPersons}
                        btnClicked = {this.togglePersonsHandler}
                        /> : null}
                    {persons}
                </AuthContext.Provider>
            </div>
      );
  }
}


export default App;
