import React, { Component } from 'react'
import SignUpForm from './SignUpForm'
import request from 'superagent'
const baseUrl = 'https://secure-dawn-03900.herokuapp.com'

export default class SignUpContainer extends Component {
  state = { email: '', password: '', welcomeMessage: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.signUp(this.state.email, this.state.password)
    console.log('test')
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  signUp = (email, password) => {
    request
      .post(`${baseUrl}/user`)
      .send({ email, password })
      .then(response => {
        this.setState({
          welcomeMessage: `Welcome, ${response.body.email}!`
        })
      })
  } 

  render() {
    return <SignUpForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
  }
}
