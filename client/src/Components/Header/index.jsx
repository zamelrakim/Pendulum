import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'

export default function Header({ currUser, logout, menu, showMenu }) {
  return (
    <header>
      <div className='site-nav'>
        <button className='menu-btn' onClick={() => showMenu(true)}>MENU</button>
        <h1 className="site-title">PENDULUM</h1>
        <nav className='nav-links'>
          <NavLink to='/tools' className='site-links'>TOOLS</NavLink> |
          <NavLink to='/jobs' className='site-links'>JOBS</NavLink>
        </nav>
      </div>
      <div
        className="overlay"
        style={menu ? { display: "block" } : { display: "none" }}
        onClick={() => showMenu(false)}
      >
        <div className="user-nav">
          {currUser
            ? 
            <>
              <Link
                to={`/users/${currUser.id}`}
                onClick={() => {
                  showMenu(false)
                }}
              >
                {currUser.username}
              </Link>
              <Link
                to={location => location}
                onClick={() => {
                  logout()
                  showMenu(false)
                }}
              >
                Logout
              </Link>
            </>
            :
            <Link to='/login'>Login/Register</Link>
          }
          <button onClick={() => showMenu(false)}>CLOSE</button>
        </div>
      </div>
    </header>
  )
}
