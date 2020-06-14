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
    console.log('All Tools: ', tools);
    console.log('Job Tools: ', jobToolsIds)
    return (
      <div>
        <h2>{job.company} | Add Tools</h2>
        <button onClick={() => saveTools()}>Save</button>
        {tools && tools.map(tool => (
          <div key={`Add-Tool-${tool.id}`}>
            <h3>{tool.name}</h3>
              <button onClick={() => updateTools(tool)}>
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
