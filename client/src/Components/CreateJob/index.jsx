import React, { Component } from 'react'
import { createJob } from '../../services/jobs'

export default class CreateJob extends Component {
  state = {
    company: ""
  }

  changeJob = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  saveJob = async () => {
    const job = await createJob(this.state)
    this.props.history.push(`/jobs/${job.id}`)
  }
  
  render() {
    return (
      <>
        <div className="page-header">
          <h2>CREATE JOB</h2>
        </div>
        <hr />
        <form onSubmit={(e) => {
            e.preventDefault();
            this.saveJob()
          }
        }>
          <label htmlFor='company'>COMPANY</label>
          <input
            type="text"
            name="company"
            value={this.state.company}
            onChange={this.changeJob}
          />
          <button className='submit-btn'>CREATE</button>
        </form>
      </>
    )
  }
}
