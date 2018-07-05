import React from 'react';
import { Link } from 'react-router-dom';

// Import icons
import icon from '../img/icons/sprite-icons.svg';

// Import components
import Nav from './Nav';
import FormSearch from './Form_Search';

const Header = () => {
	return (
		<header className="header">
			<div className="header__top">
				<div className="row header__row">
					<div className="header__top_content">
						<div className="header__logo_box">
							<div className="header__logo">
								<svg className="icon icon--logo">
									<use xlinkHref={`${icon}#icon-google`} />
								</svg>
							</div>
							<Link to="/trending" className="header__logo_name">
								Kraken
							</Link>
						</div>
						<Nav />
					</div>
				</div>
			</div>
			<div className="header__bottom">
				<div className="header__bg_stripe">&nbsp;</div>
				<div className="row header__row">
					<div className="header__bottom_content">
						<div className="header__hero_text">
							<h1 className="heading-first">
								Find the best GIFs <br />
								On the internet.
							</h1>
							<FormSearch />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
