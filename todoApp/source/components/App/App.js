import React, { Component } from 'react';

import TextInput from '../TextInput';


class App extends Component {
	
	
	render(){
		return (
				<div>
					{/*Todo App connected*/}
					<h1>Todo List</h1>
					<TextInput />
				</div>
		)
	}
	
}

export default App;