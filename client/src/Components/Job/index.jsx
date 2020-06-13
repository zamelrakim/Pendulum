import React, { Component } from 'react'
import { getJob } from '../../services/jobs'

export default class Job extends Component {
  state = {
    job: null
  }

  componentDidMount() {
    this.setJob()
  }

  setJob = async () => {
    const job = await getJob(this.props.jobId)
    this.setState({ job })
  }

  render() {
    const { job } = this.state
    return (
      <div>
        {job && (
          <>
            <h2>{job.company}</h2>
            <h3>Stack</h3>
            <div className="job-stack">
              {job.tools.map(tool => (
                <React.Fragment key={`tool-${tool.id}`}>
                  <p>{tool.name}</p>
                </React.Fragment>
              ))}
            </div>
            <h3>Engineers</h3>
            <div className="job-engineers">
              {job.engineers.map(engineer => <p>{engineer.username}</p>)}
            </div>
          </>
        )}

      </div>
    )
  }
}
