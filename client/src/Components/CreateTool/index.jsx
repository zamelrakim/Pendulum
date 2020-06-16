import React, { Component } from 'react'
import { createTool } from '../../services/tools'

export default class CreateTool extends Component {
  state = {
    name: "",
    description: ""
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
      <>
        <div className="page-header">
          <h2>CREATE TOOL</h2>
        </div>
        <hr />
        <form onSubmit={(e) => {
            e.preventDefault();
            this.saveTool()
          }
        }>
          <label htmlFor='name'>NAME</label>
          <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.changeTool}
          />
          <label htmlFor='description'>DESCRIPTION</label>
          <textarea
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.changeTool}
            rows='6'
          />
          <button className='submit-btn'>CREATE</button>
        </form>
      </>
    )
  }
}
