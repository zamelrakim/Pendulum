import React, { Component } from 'react'

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  registerChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { username, email, password } = this.state
    const { signUp, history } = this.props
    return (
      <>
        <h2>REGISTER</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          signUp(this.state)
          history.push('/')
          this.setState({
            username: "",
            email: "",
            password: ""
          })
        }}>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.registerChange}
            />
          </label>
          <label>
            Email
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.registerChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.registerChange}
            />
          </label>
          <button>REGISTER</button>
        </form>
      </>
    )
  }
}
