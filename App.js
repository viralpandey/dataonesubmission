import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import logo from './logo.svg';
import Appbar from './Appbar';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      data:'',
    }

  }
  componentDidMount()
  {
    fetch('http://localhost:8080/api/getAll').
    then((Response)=>Response.js()).
    then((findresponse)=>
    {
      console.log(findresponse);
    })
  }
  render() {
    return (
      <div className="App">
	<Appbar/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Movie Tracker</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
