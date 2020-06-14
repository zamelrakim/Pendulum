import React, { Component } from 'react';
import Header from './Components/Header'
import { Switch, Route } from 'react-router-dom'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth.js'
import { getJob } from './services/jobs'
import Profile from './Components/Profile'
import Jobs from './Components/Jobs'
import Job from './Components/Job'
import Tools from './Components/Tools'
import Tool from './Components/Tool'
import Login from './Components/LoginRegister/Login'
import Register from './Components/LoginRegister/Register'
import './App.css';

export default class App extends Component {
  state = {
    currUser: null,
    job: null,
    tool: null
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

  setJob = async (id) => {
    const job = await getJob(id)
    this.setState({ job })
  }

  render() {
    return (
      <div>
        <Header currUser={this.state.currUser} logout={this.logoutUser} />
        <Switch>
          <Route path='/users/:id' render={(props) => {
            const userId = props.match.params.id
            return <Profile userId={userId} currUser={this.state.currUser} />
          }} />
          <Route path='/tools/:id' render={(props) => {
            const toolId = props.match.params.id
            return <Tool {...props} toolId={toolId} />
          }} />
          <Route path='/tools' render={() => <Tools />} />
          <Route path='/jobs/:id' render={(props) => {
            const jobId = props.match.params.id
            return <Job jobId={jobId} />
          }} />
          <Route exact path='/jobs' render={() => <Jobs />} />
          <Route path='/login' render={(props) => <Login {...props} login={this.loginUser} />}/>
          <Route path='/register' render={(props) => <Register {...props} signUp={this.registerUser} />}/>
        </Switch>
      </div>
    );
  }
}

