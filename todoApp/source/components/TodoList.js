import React, {Component} from 'react';

//class TextDisplay extends Component {
class TodoList extends Component {
	
	
	render(){
		return (
				<div>
					{/* this.props.text != "" ? Text = this.props.text : null */}	
					
					<h3>Todo List:</h3>
					{ this.props.text != "" ? Text = this.props.text : null }
				</div>
		)
	}
	

	
}

export default TodoList;