import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import HomePage from './components/Home.js';
import LoginPage from './components/Login.js';
import RegisterPage from './components/Register.js';
import DashboardPage from './components/Dashboard.js';
import Nav from './components/Navigation.js';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={HomePage} />
		<Route path="/register" component={RegisterPage} />
		<Route path="/login" component={LoginPage} />
		<Route path="/dashboard" component={DashboardPage} />
	</Router>,
	document.querySelector('.title')
);