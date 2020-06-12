import React, { Component } from 'react';
import './App.css';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'

export default class App extends Component {
  state = {
    currUser: null
  }

  componentDidMount() {
    this.verifyUser()
  }

  verifyUser = async () => {
    const currUser = await verifyUser()
    this.setState({ currUser })
  }

  render() {
    return (
      <>
      </>
    );
  }
}

export default App;
