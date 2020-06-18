import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileTools({ tools }) {
  return (
    <>
      <div className='inner-header'>
        <h3>TOOLS</h3>
      </div>
      <div className="list-links">
        {tools.map(tool => (
          <div className="profile-tool" key={`tool-${tool.id}`}>
            <Link className='list-items' to={`/tools/${tool.id}`}>{tool.name}</Link>
          </div>
        ))}
      </div>
    </>
  )
}
