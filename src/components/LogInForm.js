import React, { Component } from 'react'

export default class LogInForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          Email: <input type="text" name="email" placeholder="Email" onChange={this.props.onChange} value={this.props.values.title} />
          Password: <input type="text" name="password" placeholder="Password" onChange={this.props.onChange} value={this.props.values.url} />
          <button >Submit</button> 
        </form>
      </div>
    )
  }
}
