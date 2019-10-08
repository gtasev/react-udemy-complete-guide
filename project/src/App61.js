import React, { Component } from 'react'

import ValidationCom from './ValidationComponent/ValidationComponent'
import Char from './Char/Char'

class App61 extends Component {
    state = {
        userInput: '',
    };

    inputChangedHandler = (event) => {
        this.setState({userInput: event.target.value})
    };

    handleRemove = (index) => {
        let editedUserInput = {...this.state};
        editedUserInput.userInput = editedUserInput.userInput.slice(0, index) + editedUserInput.userInput.slice(index + 1);
        this.setState(editedUserInput);
    };

    render() {
        let charList = null;

        if (this.state.userInput.length > 0) {
           charList = this.state.userInput.split('').map((char, index) => {
               return <Char
                   key={index}
                   character={char}
                   removeChar={() => this.handleRemove(index)}
               />
           })
        }

        return(
            <div>
                <input type="text"
                       value={this.state.userInput}
                       onChange={this.inputChangedHandler}
                />
                <p>{this.state.userInput}</p>
                <ValidationCom inputLength={this.state.userInput.length}/>
                {charList}
            </div>

        )
    }
}

export default App61;
