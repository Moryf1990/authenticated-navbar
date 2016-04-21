// import React from 'react';
// import {Link} from 'react-router';

// const Nav = React.createClass({
// 	render: function() {
// 		return (
// 			<nav className="navBar">
// 				<Link to="/">Home</Link>
// 				<Link to="/register">Register</Link>
// 				<Link to="/login">Login</Link>
// 				<Link to="/dashboard">Dashboard</Link>
// 			</nav>
// 		);
// 	}
// });

// export default Nav;





import React from 'react';
import {Link} from 'react-router';
import user from '../models/user';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},
	componentDidMount: function() {
		this.state.user.on('change', () => {
			this.setState({
				user: user
			});
		});
	},
	render: function() {
		if(this.state.user.get('id')) {
			return (
				<nav>
					<Link to="/">Home</Link>
					<Link to="/dashboard">Dashboard</Link>
					<Link to="/" onClick={this.logout}>Logout</Link>
				</nav>
			);
		}
		else {
			return (
				<nav>
					<Link to="/">Home</Link>
					<Link to="/login">Login</Link>
					<Link to="/register">Register</Link>
					<Link to="/dashboard">Dashboard</Link>
				</nav>
			);
		}
	},
	logout: function(e) {
		e.preventDefault();
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url: '/auth/logout'
		});
	}
});

