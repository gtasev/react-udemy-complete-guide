import React, { Component } from 'react'

import ValidationCom from './ValidationComponent/ValidationComponent'

class App61 extends Component {
    state = {
        text: '',
        textLength: 0
    };

    mergeAndAssignText = (char) => {
      const newState = {...this.state};
        newState.text = char;
        newState.textLength = newState.text.length;
        this.setState(newState);
        console.log(this.state);
    };



    render() {
        return(
            <div>
                <input type="text" value={this.state.text} onChange={(event) => {this.mergeAndAssignText(event.target.value)}} />
                <ValidationCom textLength={this.state.textLength}/>
            </div>

        )
    }
}

export default App61;
