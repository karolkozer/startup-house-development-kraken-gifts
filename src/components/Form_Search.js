import React from 'react';
import PropTypes from 'prop-types';
import { replaceQuery } from '../helpers/convert_data';

// Import icons
import icon from '../img/icons/sprite-icons.svg';

export default class FormSearch extends React.Component {
	static contextTypes = {
		router: PropTypes.object.isRequired
	};

	state = { inputValue: '' };

	handleForm = (e) => {
		// Prevent default actions
		e.preventDefault();
		// Get the value,
		const query = `${this.state.inputValue}`;
		// Remove spaces and specila characters
		const newQuery = replaceQuery(query).trim();
		// If there is a query, push to the search section
		if (newQuery) {
			e.currentTarget.reset();
			this.context.router.history.push(`/search/${newQuery}`);
		}
	};

	// Update inputValue
	updateInputValue = (e) =>
		this.setState({
			inputValue: e.target.value
		});

	render() {
		return (
			<form onSubmit={this.handleForm} className="form-search">
				<input
					value={this.state.value}
					onChange={this.updateInputValue}
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
