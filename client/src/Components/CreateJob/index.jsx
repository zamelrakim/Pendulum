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
        <h2>CREATE JOB</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            this.saveJob()
          }
        }>
          <label>
            Name
            <input
              type="text"
              name="company"
              value={this.state.company}
              onChange={this.changeJob}
            />
          </label>
          <button>CREATE</button>
        </form>
      </>
    )
  }
}
