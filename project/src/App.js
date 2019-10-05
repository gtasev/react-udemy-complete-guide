import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person/person';

function App() {
  var app =(
      <div>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29" />
      </div>
  )

    return(
      <div>
          {app}
      </div>
    );
}


export default App;
