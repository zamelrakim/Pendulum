import React, { Component } from 'react'
import { getTools } from '../../services/tools'

export default class UpdateJob extends Component {
  state = {
    tools: []
  }

  componentDidMount() {
    this.setTools()
  }

  setTools = async () => {
    const tools = await getTools()
    this.setState({ tools })
  }
  
  render() {
    const { tools } = this.state
    const { job, updateTools, saveTools } = this.props
    const jobToolsIds = Array.from(job.tools, x => x.id)
    return (
      <div>
        <div className="page-header">
          <h2>{job.company} | Add Tools</h2>
          <button className='btn-header' onClick={() => saveTools()}>Save</button>
        </div>
        <hr />
        {tools && tools.map(tool => (
          <div className='list-item' key={`Add-Tool-${tool.id}`}>
            <h3>{tool.name}</h3>
              <button className='btn-edit' onClick={() => updateTools(tool)}>
                { jobToolsIds.includes(tool.id)
                  ?
                  `Remove`
                  :
                  `Add`
                }
              </button>
          </div>
        ))}
      </div>
    )
  }
}
