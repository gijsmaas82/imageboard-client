import React, { Component } from 'react'

export default class CreateForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          Title: <input type="text" name="title" placeholder="title" onChange={this.props.onChange} value={this.props.values.title} />
          Url: <input type="text" name="url" placeholder="url" onChange={this.props.onChange} value={this.props.values.url} />
          <button >Submit</button> 
        </form>
      </div>
    )
  }
}
