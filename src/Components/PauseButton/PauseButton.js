import React, { Component } from 'react';

class PauseButton extends Component {
	render(){
		return (
			<div>
				<button id="myBtn" onClick={this.props.toggleVideo}>Play | Pause</button>
			</div>
		);
	}
}
export default PauseButton;