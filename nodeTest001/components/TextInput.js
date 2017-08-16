import React from 'react';
import TextDisplay from './TextDisplay';

class TextInput extends React.Component {

	constructor(props){
		super(props);
		this.state = {inputText:'testText'};
	}
    
	handleChange(e){
		this.setState({inputText:e.target.value});
//		e.preventDefault();
	}
	
	
	render(){
		
//		console.log(this.state);

		return (
			<div>
				<input
				    type='text' 
					placeholder='Enter text'
					value={this.state.inputText}
					onChange={this.handleChange.bind(this)}
				
			    />
				 
				<TextDisplay outputText={this.state.inputText} />
			</div>
				
				
				);
		
	}
}

export default TextInput;