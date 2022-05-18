import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepages/Homepage';
import ContactUs from './pages/contactUs/ContactUs';
import MainNavigation from './Layouts/MainNavigation';

const App= () => {
	return (
		<div>
			<MainNavigation/>
			<Switch>
				<Route path='/' exact={true}>
					<Homepage/>
				</Route>
				<Route path='/contact-us' exact={true}>
					<ContactUs/>
				</Route>
			</Switch>
		</div>
	)
};

export default App; 