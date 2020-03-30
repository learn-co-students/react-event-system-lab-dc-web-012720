import React from 'react';

class EyesOnMe extends React.Component {

    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus= {() => {console.log("Good!")}} onBlur= {this.handleBlur}>Focus Test</button>
        )
    }

}

export default EyesOnMe