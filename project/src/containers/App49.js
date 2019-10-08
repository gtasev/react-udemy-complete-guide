import React, {Component} from 'react';
import './App49.css'

import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';

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
