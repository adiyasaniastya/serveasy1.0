import React from 'react';
import './App.css'
import Todo from './components/Todo'

const App= () => {
	return (
		<div>
			<h1>
				To Do list
			</h1>
			<Todo />
			<Todo />
		</div>
	)
};

export default App; 