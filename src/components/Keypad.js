// Code Keypad Component Here
// import React, {Component} from 'react';

// class Keypad extends Component{
//     keyPad(){
//         console.log('Entering password...')
//     }

//     render(){
//         return <input type='password' oneKeyUp={this.keyPad}></input>
//     }

// }







// export default Keypad;


import React, {Component} from 'react'

export default class Keypad extends Component {

    handleKeyUp(){
        console.log("Entering password...")
    }
    
    render(){
        return <input type="password" onKeyUp={this.handleKeyUp}></input>
    }
}