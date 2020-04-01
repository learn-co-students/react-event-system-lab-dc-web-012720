// Code EyesOnMe Component Here
import React, {Component} from 'react'

class EyesOnMe extends Component {
	rendeR(){
		return(
			<button onFocus={console.log('Good!')} onBlur={console.log('Hey! Eyes on me!')}/>
		)
	}
}


export default EyesOnMe 