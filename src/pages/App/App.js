import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom'
import './App.css';

import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';



class App extends Component {
  constructor() {
    super();
    this.state; {
      
    }
  }
  render() {
    return (
      <div>Hello World
        <div> By: Jon Garman</div>
        <div> This is an instagram app</div>
        <div> with some minor adjustments</div>
      </div>
    );
  }
}

export default App;
