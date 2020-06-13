import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  loginChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    const { login, history } = this.props
    return (
      <>
        <h2>LOGIN</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          login(this.state)
          history.push('/')
          this.setState({
            email: "",
            password: ""
          })
        }}>
          <label >Email<input type="text" name="email" value={email} onChange={this.loginChange} /></label>
          <label >Password<input type="password" name="password" value={password} onChange={this.loginChange} /></label>
          <button>LOGIN</button>
        </form>
        <Link to='/register'>REGISTER</Link>
      </>
    )
  }
}
