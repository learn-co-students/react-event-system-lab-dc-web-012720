import React from 'react'

class EyesOnMe extends React.Component {

    focusHandler = () => {
        console.log("Good!")
    }

    removeFocusHandler = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return(
            <button onFocus={this.focusHandler} onBlur={this.removeFocusHandler}>Click Me!</button>
        )
    }
}

export default EyesOnMe