import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ParentCounter from './counter/ParentCounter';

class App extends Component{

  render(){
    return (
      <div className="App">
        <ParentCounter />
      </div>
    );
  }
  
}

export default App;
