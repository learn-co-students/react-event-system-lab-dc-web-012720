import React from 'react'

class Keypad extends React.Component {
   
    handlePassword = () => 
        console.log('Entering password...')
    
    render(){
        return (<input 
            type="password"
            onKeyUp={this.handlePassword}
            />)
    }
    
}
// Code Keypad Component Here

export default Keypad;