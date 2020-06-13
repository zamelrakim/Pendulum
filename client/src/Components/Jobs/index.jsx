import React, { Component } from 'react'
import { getJobs } from '../../services/jobs'
import { Link } from 'react-router-dom'

export default class Jobs extends Component {
  state = {
    jobs: []
  }

  componentDidMount() {
    this.reqJobs()
  }

  reqJobs = async () => {
    const jobs = await getJobs()
    this.setState({ jobs })
  }

  render() {
    const { jobs } = this.state
    return (
      <div>
        <h2>JOBS</h2>
        {
          jobs.map(job => (
            <Link
              to={`/jobs/${job.id}`}
              key={`job-${job.id}`}
            >
              <p>{job.company}</p>
            </Link>
          ))
        }
      </div>
    )
  }
}
