import {createStore} from 'redux';
//import {test_redcr as reducer} from '../reducers/test_reducer';
import test_redcr from '../reducers/test_reducer';


//initiated in clientjs so that we 
//can add middleware

const initState = {
	todos:[]
}



export default function configureStore(initialState = initState){
//	console.log(test_redcr);
	return createStore(test_redcr,initialState);
}