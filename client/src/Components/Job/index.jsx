import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { getJob, updateJob } from '../../services/jobs'
import UpdateJob from '../UpdateJob'
import { Route } from 'react-router-dom'

export default class Job extends Component {
  state = {
    job: null,
    isEdit: null
  }

  componentDidMount() {
    this.setJob()
  }

  setJob = async () => {
    const job = await getJob(this.props.jobId)
    this.setState({ job })
  }

  editJob = () => {
    this.setState({ isEdit: true })
    this.props.history.push(`/jobs/${this.state.job.id}/edit`)
  }

  updateTools = (tool) => {
    let job = { ...this.state.job }
    const jobToolsIds = Array.from(job.tools, x => x.id)
    if (!jobToolsIds.includes(tool.id)) {
      job.tools.push(tool)
    } else {
      job.tools = job.tools.filter(currTool => currTool.id !== tool.id)
    }
    this.setState({
      job: job
    })
  }

  saveTools = async () => {
    const { job } = this.state
    await updateJob(job.id, job)
    this.setState({ isEdit: false })
    this.props.history.push(`/jobs/${this.state.job.id}`)
  }

  render() {
    const { job } = this.state
    return (
      <div>
        {job && (
          <>
            {this.state.isEdit ?
              <Route
                path={`/jobs/${job.id}/edit`}
                render={() => (
                  <UpdateJob
                    job={job}
                    updateTools={this.updateTools}
                    saveTools={this.saveTools}
                  />
                )}
              />
              :
              <>
                <h2>{job.company}</h2>
                <h3>Stack</h3>
                <button onClick={() => this.editJob()}>Edit</button>
                <div className="job-stack">
                  {job.tools.map(tool => (
                    <React.Fragment key={`tool-${tool.id}`}>
                      <p>{tool.name}</p>
                    </React.Fragment>
                  ))}
                </div>
                <h3>Engineers</h3>
                <div className="job-engineers">
                  {job.engineers.map(engineer => (
                    <p key={`engineer-${engineer.id}`}>
                      {engineer.username}
                    </p>
                  ))}
                </div>
              </>
            }
          </>
        )}
      </div>
    )
  }
}
