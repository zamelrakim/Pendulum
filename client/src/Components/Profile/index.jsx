import React, { Component } from 'react'
import { getUser } from '../../services/users'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    this.setUser()
  }

  setUser = async () => {
    const user = await getUser(this.props.userId)
    this.setState({ user })
  }

  render() {
    const { user } = this.state
    const { currUser } = this.props
    const isCurrUser = (user && (currUser && user.id === currUser.id)) ? true : false
    return (
      <div>
        {user && (
          <>
            <div className='profile-info'>
              <h2>{user.username}</h2>
              {user.job && (
                <h3>
                  Works @ <Link to={`/jobs/${user.job_id}`}>{user.job.company}</Link>
                </h3>
              )}
            </div>
            <div className="profile-tools">
              {user.tools.length !== 0
                ? 
                <>
                  <h3>Tools</h3>
                  {user.tools.map(tool => (
                    <div className="profile-tool" key={`tool-${tool.id}`}>
                    <Link to={`/tools/${tool.id}`}>{tool.name}</Link>
                    </div>
                  ))}
                </>
                :
                <>
                  {isCurrUser
                    ?
                    <h3>You Have No Tools.</h3>
                    :
                    <h3>This User Has No Tools.</h3>
                  }
                </>
              }
            </div>
          </>
        )}
      </div>
    )
  }
}
