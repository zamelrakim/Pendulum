import React, { Component } from 'react'
import { latestTool } from '../../services/tools.js'
import { latestJob } from '../../services/jobs.js'
import { Link } from 'react-router-dom'

export default class HomeUser extends Component {
  state = {
    latestJob: null,
    latestTool: null
  }

  componentDidMount() {
    this.setLatest()
  }

  setLatest = async () => {
    const lastJob = await latestJob()
    const lastTool = await latestTool()
    this.setState({ 
      latestJob: lastJob,
      latestTool: lastTool
     })
  }

  render() {
    const { latestTool, latestJob } = this.state
    return (
      <>
        <div className="page-header">
          <h2>Home</h2>
        </div>
        <hr />
        <div className="lead-section">
          <div className="inner-header">
            Latest Tool
          </div>
          <div className="inner-list">
            {latestTool &&
              <Link to={`/tools/${latestTool.id}`}>{latestTool.name}</Link>
            }
          </div>
        </div>
        <div className="follow-section">
          <div className="inner-header">
            Latest Job
          </div>
          <div className="inner-list">
            {latestJob &&
              <Link to={`/jobs/${latestJob.id}`}>{latestJob.company}</Link>
            }
          </div>
        </div>
      </>
    )
  }
}