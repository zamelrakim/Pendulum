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
        <div className="page-header">
          <h2>REGISTER</h2>
        </div>
        <hr />
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
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.registerChange}
          />
          <label>
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.registerChange}
          />
          <label>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.registerChange}
          />
          <button className='submit-btn'>REGISTER</button>
        </form>
      </>
    )
  }
}
