import React from 'react';

class TextDisplay extends React.Component {


	render(){
		

		return (
				<div>
				 {this.props.outputText}
				</div>
				 
				);
	}
}

export default TextDisplay;