import React, { Component } from 'react'
import { getUser } from '../../services/users'
import { Link } from 'react-router-dom'
import ProfileTools from '../ProfileTools'

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
            <div className='page-header'>
              <h2>{user.username}</h2>
              {user.job && (
                <h2>
                  Works @ <Link to={`/jobs/${user.job_id}`}>{user.job.company}</Link>
                </h2>
              )}
            </div>
            <hr />
            <div className="lead-section">
              {user.tools.length !== 0
                ? 
                <ProfileTools tools={user.tools} />
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
