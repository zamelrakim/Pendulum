import React, { Component } from 'react'
import { getUser } from '../../services/users'

export default class Profile extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    this.setUser()
  }

  setUser = async () => {
    const user = await getUser(this.props.userId)
    console.log(user);
    
    this.setState({ user })
  }

  render() {
    const { user } = this.state
    const { currUser } = this.props
    const isCurrUser = (currUser && user.id === currUser.id) ? true : false
    return (
      <div>
        {user && (
          <>
            <div className='profile-info'>
              <h2>{user.username}</h2>
              {user.job && <h3>{user.job.company}</h3>}
            </div>
            <div className="profile-tools">
              {user.tools.length !== 0
                ? 
                <>
                  {user.tools.map(tool => (
                    <div className="profile-tool" key={`tool-${tool.id}`}>
                      <h3>{tool.name}</h3>
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
