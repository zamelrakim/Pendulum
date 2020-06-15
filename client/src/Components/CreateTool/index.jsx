import React, { Component } from 'react'
import { createTool } from '../../services/tools'

export default class CreateTool extends Component {
  state = {
    name: ""
  }

  changeTool = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  saveTool = async () => {
    const tool = await createTool(this.state)
    this.props.history.push(`/tools/${tool.id}`)
  }

  render() {
    return (
      <div>
        <h2>CREATE TOOL</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            this.saveTool()
          }
        }>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.changeTool}
            />
          </label>
          <button>CREATE</button>
        </form>
      </div>
    )
  }
}
