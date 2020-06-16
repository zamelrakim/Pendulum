import React, { Component } from 'react'
import { createJob } from '../../services/jobs'

export default class CreateJob extends Component {
  state = {
    company: "",
    description: ""
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
          <label htmlFor='company'>Company</label>
          <input
            type="text"
            name="company"
            value={this.state.company}
            onChange={this.changeJob}
          />
          <label htmlFor='description'>Description</label>
          <textarea
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.changeJob}
            rows='6'
          />
          <button className='submit-btn'>CREATE</button>
        </form>
      </>
    )
  }
}
