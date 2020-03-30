// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {



    handleKeyUp = (event) => {
        console.log("Entering password...")
    }

    render() {
        // console.log()
        return (
            <div>
                <input onKeyUp={this.handleKeyUp} type="password" />
            </div>
        )
    }

}

export default Keypad