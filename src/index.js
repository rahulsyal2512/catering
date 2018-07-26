import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Email from './Email';
import Profile from './Profile';
import Menu from './Menu';
import Location from './Location';
import Salesgroup from './Salesgroup';
import Items from './Items';
import Preparation from './Preparation';
import Signup from './Signup';
import Login from './Login';
import Users from './Users';
import Reports from './Reports';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './Dashboard';

ReactDOM.render(

<BrowserRouter>
		<div className="style">
			<Route exact path="/" component={Login}></Route>
			<Route path="/Login" component={Login}></Route>
			<Route path="/Signup" component={Signup}></Route>
			<Route path="/Location" component={Location}></Route>
			<Route path="/Dashboard" component={Dashboard}></Route>
			<Route path="/Email" component={Email}></Route>
			<Route path="/Profile" component={Profile}></Route>
			<Route path="/Preparation" component={Preparation}></Route>
			<Route path="/Items" component={Items}></Route>
			<Route path="/Users" component={Users}></Route>
			<Route path="/Salesgroup" component={Salesgroup}></Route>
			<Route path="/Reports" component={Reports}></Route>
			<Route path="/Menu" component={Menu}></Route>
		</div>
	</BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
