import React, { Component } from 'react'
import { getTool, deleteTool } from '../../services/tools'
import { Link } from 'react-router-dom'

export default class Tool extends Component {
  state = {
    tool: null,
    destroyed: null
  }

  componentDidMount() {
    this.setTool()
  }

  setTool = async () => {
    const tool = await getTool(this.props.toolId)
    this.setState({ tool })
  }

  deleteTool = async () => {
    const destroyed = await deleteTool(this.props.toolId)
    console.log(destroyed);
    
    destroyed ? this.props.history.push('/tools') : this.setState({ destroyed });
  }

  closeError = () => {
    this.setState({ destroyed: null })
  }

  render() {
    const { tool, destroyed } = this.state
    const { currUser } = this.props
    return (
      <div>
        {tool && (
          <>
            <div className="page-header">
              <h2 className=''>{tool.name}
              <p>
                by
                <Link to={`/users/${tool.creator.id}`}>
                  {tool.creator.username}
                </Link>
                </p>
              </h2>
              {(currUser && tool.creator.id === currUser.id) && (
                <>
                  <button
                    className='btn-header'
                    onClick={() => this.deleteTool()}
                  >DELETE TOOL
                  </button>
                  {destroyed === false && (
                    <div>
                      <p>Tool Is Being Used And Can Not Be Deleted</p>
                      <button onClick={() => this.closeError()}>x</button>
                    </div>
                  )}
                </>
              )}
            </div>
            <hr />
            <div className="lead-section">
              <div className="inner-header">
                <h3>DESCRIPTION</h3>
              </div>
              {tool.description ?
                <p>{tool.description}</p>
                :
                <p>This Tool Has No Description At The Moment</p>
              }
            </div>
          </>
        )}
      </div>
    )
  }
}
