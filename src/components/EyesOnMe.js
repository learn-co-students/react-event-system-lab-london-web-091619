import React from 'react'

export default class EyesOnMe extends React.Component {

    handleButtonFocus = () => {
        console.log("Good!")
    }

    handleButtonBlur = () => {
        console.log("Hey! Eyes on me!")
    }

    render(){
        return(
            <button onFocus={this.handleButtonFocus} onBlur={this.handleButtonBlur}/>
        )
    }
}