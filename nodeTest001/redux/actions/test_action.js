export default test_act = {
	addTodo(text){
		return{
			type:'ADD_TODO',
		    text:text
		}
	}
}

//store.dispatch(addTodo('some text'));