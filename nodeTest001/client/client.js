import React from 'react'; //same as es5's var React = require('react');
import ReactDOM from 'react-dom';
//import { render } from 'react-dom'; = var render = require('react-dom').render;
import App from "../components/App";
import configureStore from '../redux/store/store-config';
import {Provider} from 'react-redux';
//entry point to the App

let initState = {
		todos:[{
			id:0,
			completed: false,
			text: 'Initial state'
		}]
}

let store = configureStore(initState);
console.log(store);

//configure and create store
// var store = createStore(reducers, initalState)

ReactDOM.render(
		<Provider store={store}>
	    	<App />
	    </Provider>,
		document.getElementById('app')
);