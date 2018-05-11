import React, {Component} from 'react';

import TodoList from './TodoList';

class TextInput extends Component {
	
	constructor(props){
		super();
		this.state = {
				inputText : ""
		}
		
		this.handleChange = this.handleChange.bind(this);
	}
	render(){
		return (
				<div>
					
					<input 
						type="text"
						placeholder = "Enter Text"
						value={this.state.inputText}
						onChange={this.handleChange}
					/>
					
					<button>Submit</button>
					
					<TodoList 
						text = {this.state.inputText}
					/>
					
					
				</div>
		)
	}
	
	
	handleChange(e){
//		e.preventDefault();
		const text = e.target.value;
		//console.log(text);
		this.setState({inputText:text})
	
	}
	
}

export default TextInput;