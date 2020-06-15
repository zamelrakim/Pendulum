import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'

export default function Header({ currUser, logout }) {
  return (
    <header>
      <div className='site-nav'>
        <h1 className="site-title">PENDULUM</h1>
        <nav className='nav-links'>
          <NavLink to='/tools' className='site-links'>Tools</NavLink> |
          <NavLink to='/jobs' className='site-links'>Jobs</NavLink>
        </nav>
      </div>

      <div className="user-nav">
        {currUser
          ? 
          <>
            <Link to={`/users/${currUser.id}`}>{currUser.username}</Link> |
            <Link to={location => location} onClick={() => logout()}>Logout</Link>
          </>
          :
          <Link to='/login'>Login/Register</Link>
        }
      </div>
      
    </header>
  )
}
