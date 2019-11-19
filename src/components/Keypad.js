// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class KeyPad extends Component{
  inputPassword = () => console.log('Entering password...')

  render () {
    return (
    <input type="password" onKeyUp={this.inputPassword}/>
    )
  }
}
