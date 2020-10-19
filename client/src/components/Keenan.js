import React, { Component } from 'react'
import Signin from './Siginin'

export default class Keenan extends Component {
  constructor(){
    super()
    this.state = {
      loggedin: false,

    }
  }
  render() {
    return (
      <div>
        <Signin/>
      </div>
    )
  }
}

