import React from 'react';

// Import icons
import icon from '../img/icons/sprite-icons.svg';

export default class FormSearch extends React.Component {
	render() {
		return (
			<form className="form-search">
				<input
					className="form-search__input"
					type="text"
					name="text"
					id="text"
					placeholder="Search GIFs"
					autoComplete="off"
				/>
				<button className="btn btn--submit">
					Find
					<svg className="icon icon--submit">
						<use xlinkHref={`${icon}#icon-paper-plane`} />
					</svg>
				</button>
			</form>
		);
	}
}
