import React from 'react';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList';

class App extends React.Component {
	
	render(){
		
		return (
		        <div>
		           <h1>Todo List</h1>
		           <TodoInput />
		           <TodoList />
		        </div>);
	}
}

export default App;