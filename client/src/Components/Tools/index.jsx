import React, { Component } from 'react'
import { getTools } from '../../services/tools'
import { Link } from 'react-router-dom'

export default class Tools extends Component {
  state = {
    tools: []
  }

  componentDidMount() {
    this.reqTools()
  }

  reqTools = async () => {
    const tools = await getTools()
    this.setState({ tools })
  }

  render() {
    const { tools } = this.state
    return (
      <div>
        <h2>Tools</h2>
        <div>
        {tools && 
            tools.map(tool => (
              <Link
                to={`/tools/${tool.id}`}
                key={`tool-${tool.id}`}
              >
                <p>{tool.name}</p>
              </Link>
          ))
        }
        </div>
      </div>
    )
  }
}
