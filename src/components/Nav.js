import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
	<nav className="nav">
		<ul className="nav__list">
			<li className="nav__item">
				<NavLink exact to="/trending" className="nav__link">
					Trending
				</NavLink>
			</li>
			<li className="nav__item">
				<NavLink exact to="/likes" className="nav__link">
					Likes
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default Nav;
