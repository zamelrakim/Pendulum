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

  loginUser = async (loginData) => {
    const currUser = await loginUser(loginData);
    this.setState({ currUser });
  }

  registerUser = async (registerData) => {
    const currUser = await registerUser(registerData)
    this.setState({ currUser })
  }

  verifyUser = async () => {
    const currUser = await verifyUser()
    this.setState({ currUser })
  }

  logoutUser = async () => {
    this.setState({ currUser: null })
    localStorage.clear()
    removeToken()
  }

  render() {
    return (
      <>
      </>
    );
  }
}

export default App;
