import React, { Component } from 'react'
import { getTool } from '../../services/tools'
import { Link } from 'react-router-dom'

export default class Tool extends Component {
  state = {
    tool: null
  }

  componentDidMount() {
    this.setTool()
  }

  setTool = async () => {
    const tool = await getTool(this.props.toolId)
    this.setState({ tool })
  }

  render() {
    const { tool } = this.state
    return (
      <div>
        {tool && (
          <>
            <h2>{tool.name}</h2>
            <h3>
              Creator:
              <Link to={`/users/${tool.creator.id}`}>
                {tool.creator.username}
              </Link>
            </h3>
          </>
        )}
      </div>
    )
  }
}
