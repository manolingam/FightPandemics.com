import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';
import logo from '../assets/logo.svg';

import './styles.css';

export const Header = () => {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
	return (
		<div className='navigation'>
			<div id='nav-logo' href='#home'>
				<img
					src={logo}
					width='auto'
					height='50'
					className='d-inline-block align-top'
					alt='Fight Pandemics logo'
				/>
				<h4>Fight Pandemics</h4>
			</div>
			<div className='pages'>
				<li>
					<NavLink exact to='/'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/about'>About us</NavLink>
				</li>
				<li>
					<NavLink to='/medical'>Medical Info</NavLink>
				</li>
			</div>
			<div className='authentication'>
				{!isAuthenticated && (
					<div onClick={() => loginWithRedirect({})}>Login</div>
				)}
				{!isAuthenticated && (
					<div onClick={() => loginWithRedirect({})}>Signup</div>
				)}
				{isAuthenticated && <div onClick={() => logout()}>Log out</div>}
			</div>
		</div>
	);
};
