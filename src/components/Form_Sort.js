import React from 'react';

// Import icons
import icon from '../img/icons/sprite-icons.svg';

export default class FormSort extends React.Component {
	render() {
		return (
			<form className="form-sort">
				<p className="form-sort__text">Sort:</p>
				<select name="sort" id="sort" className="form-sort__select">
					<option value="latest" className="form-sort__option" selected>
						latest GIFs
					</option>
					<option value="old" className="form-sort__option">
						old GIFs
					</option>
				</select>
				<span className="form-sort__icon_box">
					<svg className="icon icon--sort">
						<use xlinkHref={`${icon}#icon-chevron-up`} />
					</svg>
				</span>
			</form>
		);
	}
}
