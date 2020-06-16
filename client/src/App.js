import React, { Component } from 'react';
import Header from './Components/Header'
import { Switch, Route } from 'react-router-dom'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth.js'
import Profile from './Components/Profile'
import Jobs from './Components/Jobs'
import Job from './Components/Job'
import CreateJob from './Components/CreateJob'
import Tools from './Components/Tools'
import Tool from './Components/Tool'
import CreateTool from './Components/CreateTool'
import Login from './Components/LoginRegister/Login'
import Register from './Components/LoginRegister/Register'
import Home from './Components/Home'
import './App.scss';

export default class App extends Component {
  state = {
    currUser: null,
    menu: false
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

  showMenu = (value) => {
    const menu = value ? true : false
    this.setState({ menu })
  }

  render() {
    return (
      <>
        <Header menu={this.state.menu} currUser={this.state.currUser} logout={this.logoutUser} showMenu={this.showMenu} />
        <div className='main'>
          <Switch>
            <Route path='/users/:id' render={(props) => {
              const userId = props.match.params.id
              return <Profile userId={userId} currUser={this.state.currUser} />
            }} />
            <Route exact path='/tools/new' render={(props) => <CreateTool {...props} />} />
            <Route path='/tools/:id' render={(props) => {
              const toolId = props.match.params.id
              return <Tool {...props} toolId={toolId} currUser={this.state.currUser} />
            }} />
            <Route path='/tools' render={(props) => <Tools {...props} currUser={this.state.currUser} />} />
            <Route exact path='/jobs/new' render={(props) => <CreateJob {...props} verifyUser={this.verifyUser} />} />
            <Route path='/jobs/:id' render={(props) => {
              const jobId = props.match.params.id
              return <Job {...props} jobId={jobId} currUser={this.state.currUser} />
            }} />
            <Route exact path='/jobs' render={(props) => <Jobs {...props} currUser={this.state.currUser} />} />
            <Route path='/login' render={(props) => <Login {...props} login={this.loginUser} />}/>
            <Route path='/register' render={(props) => <Register {...props} signUp={this.registerUser} />} />
            <Route exact path='/' render={() => <Home />} />
          </Switch>
        </div>
      </>
    );
  }
}

