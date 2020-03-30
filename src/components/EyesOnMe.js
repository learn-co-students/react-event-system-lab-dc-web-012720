// Code Keypad Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {

    handleFocus = () => {
        console.log("Good!")
    }

    handleBlur = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        // console.log()
        return (
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
            </div>
        )
    }

}


export default EyesOnMe