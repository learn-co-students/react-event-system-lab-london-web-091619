// Code Keypad Component Here
import React, {Component} from 'react';

class Keypad extends Component(){
    keypad() {
        console.log()
    }

    render(){
        return <input type='password' oneKeyup={this.keypad}></input>
    }

}







export default Keypad;