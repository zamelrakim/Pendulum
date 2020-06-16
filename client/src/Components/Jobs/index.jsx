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
    const { history } = this.props
    return (
      <>
        <div className="page-header">
          <h2>JOBS</h2>
          <button
            className='btn-header'
            onClick={() => history.push('/jobs/new')}
          > NEW JOB
          </button>
        </div>
        <hr />
        <div className='list-links'>
          {
            jobs.map(job => (
              <Link
                to={`/jobs/${job.id}`}
                key={`job-${job.id}`}
                className='list-item'
              >
                <p>{job.company}</p>
              </Link>
            ))

          }
        </div>
      </>
    )
  }
}
