import React, {Component} from 'react';


class TextDisplay extends Component {
	
	
	render(){
		return (
				<div>
					{ this.props.text != "" ? Text = this.props.text : null }					
				</div>
		)
	}
	

	
}

export default TextDisplay;