// Code Keypad Component Here
import React from "react";

class Keypad extends React.Component {

    upEvent = () => console.log('Entering password...')

    render() {
        return(
            <div>
                <input type="password" onKeyUp={this.upEvent} />
            </div>
        )
    }

}

export default Keypad