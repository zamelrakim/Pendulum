import React, { Component } from 'react';
import Header from './Components/Header'
import { Switch, Route } from 'react-router-dom'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth.js'
import { getJob } from './services/jobs'
import Jobs from './Components/Jobs'
import './App.css';

export default class App extends Component {
  state = {
    currUser: null,
    job: null
  }

  componentDidMount() {
    // this.verifyUser()
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

  setJob = async (id) => {
    const job = await getJob(id)
    this.setState({ job })
  }

  render() {
    return (
      <div>
        <Header currUser={this.state.currUser} />
        <Switch>
          <Route path='/jobs' render={() => <Jobs setJob={this.setJob} />} />
        </Switch>
      </div>
    );
  }
}

