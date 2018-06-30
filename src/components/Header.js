import React from 'react';

// Import icons
import icon from '../img/icons/sprite-icons.svg';

// Import components
import Nav from './Nav';

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
							<p className="header__logo_name">Kraken</p>
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
								Find the best Gifs <br />
								On the internet.
							</h1>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
