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
        <div className="page-header">
          <h2>LOGIN</h2>
        </div>
        <hr />
        <form onSubmit={(e) => {
          e.preventDefault();
          login(this.state)
          history.push('/')
          this.setState({
            email: "",
            password: ""
          })
        }}>
          <label htmlFor='email'>Email</label>
          <input type="text" name="email" value={email} onChange={this.loginChange} />
          <label htmlFor='password'>Password</label>
          <input type="password" name="password" value={password} onChange={this.loginChange} />
          <button className='submit-btn'>LOGIN</button>
        </form>
        <Link to='/register'>REGISTER</Link>
      </>
    )
  }
}
