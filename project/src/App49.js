import React, {Component} from 'react';
import './App49.css'

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App49 extends Component {
    state = {
        username: 'supermax',
    };

    handleInput = (event) => {
        const current = {...this.state};
        current.username = event.target.value;
        this.setState(current);
    };

    render() {
        return (
            <div>
                <UserInput
                    changed={this.handleInput}
                    currentName={this.state.username}
                />
                <UserOutput
                    userName={this.state.username}
                />
                <UserOutput
                    userName={this.state.username}
                />
                <UserOutput
                    userName='Max'
                />
            </div>
        )
    }
}

export default App49;
