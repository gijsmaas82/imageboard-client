import React, { Component } from 'react'
import CreateFormContainer from './CreateFormContainer'
import LogInFormContainer from './LogInFormContainer'
import SignUpContainer from './SignUpContainer'

export default class List extends Component {
  render() {
    return (
      <div> 
        <SignUpContainer />
        {!this.props.user? <LogInFormContainer /> :
        <CreateFormContainer />}
        {!this.props.images && 'Loading'}
        {this.props.images && this.props.images.map(image => {
          return <div>
            <h3>{image.title}</h3>
            <img src={image.url} />
          </div>
        })}
      </div>
    )
  }
}
