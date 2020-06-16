import React, { Component } from 'react'
import { getTools } from '../../services/tools'
import { Link } from 'react-router-dom'
import './tools.scss'

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
    const { history, currUser } = this.props
    return (
      <>
        <div className="page-header">
          <h2>TOOLS</h2>
          {currUser && (
            <button
              className='btn-header'
              onClick={() => history.push('/tools/new')}
            >CREATE TOOL
            </button>
          )}
        </div>
        <hr />
        <div>
          {tools &&
            tools.map(tool => (
              <Link
                to={`/tools/${tool.id}`}
                key={`tool-${tool.id}`}
                className='list-item'
              >
                <p>{tool.name}</p>
              </Link>
            ))
          }
        </div>
      </>
    )
  }
}
