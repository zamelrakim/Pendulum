import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header({ currUser }) {
  return (
    <header>
      <div className='site-nav'>
        <h1 className="site-title">PENDULUM</h1>
        <nav>
          <NavLink to='/tools'>Tools</NavLink>
          <NavLink to='/jobs'>jobs</NavLink>
        </nav>
      </div>

      <div className="user-nav">
        {currUser
          ? 
          <>
            <Link to={`/users/${currUser.id}`}>{currUser}</Link> |
            {/* ADD LOGOUT */}
          </>
          :
          <Link to='/login'>Login/Register</Link>
        }
      </div>
      
    </header>
  )
}
