import React from 'react';

// Import icons
import icon from '../img/icons/sprite-icons.svg';

const Header = () => {
	return (
		<header className="header">
			<div className="row header__row">
				<div className="header__logo_box">
					<div className="header__logo">
						<svg className="icon icon--logo">
							<use xlinkHref={`${icon}#icon-google`} />
						</svg>
					</div>
					<p className="header__logo_name">Kraken</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
