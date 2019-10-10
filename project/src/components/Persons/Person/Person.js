import React, {Component} from 'react';
import './Person.css'
import classes from './Person.css'
import Auxiliary from '../../../hoc/Auxiliary'
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        if (this.props.index === 1) {
            this.inputElementRef.current.focus();
        }
        console.log(this.context.authenticated);
    }

    render () {
       return (
            <Auxiliary>
                <div className={classes.Person}>
                        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input 
                        type="text"
                        ref={this.inputElementRef} 
                        onChange={this.props.changed}
                        value={this.props.name}
                    />
                </div>
            </Auxiliary>
        ) 
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;
