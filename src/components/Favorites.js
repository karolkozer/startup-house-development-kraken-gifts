import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

class Favorites extends React.Component {
	static contextTypes = {};

	addToLibrary = (gif) => {
		this.props.gifs.addToLibrary(gif);
		console.log(this.props.gifs.library);
	};

	checkTheLibrary = (check, details) => {
		console.log('Library', this.props.gifs.library);
		console.log('Before', details);
		return !check ? (
			<button
				onClick={() => this.addToLibrary(details)}
				className="btn--controller btn--add"
			>
				ADD TO FAVORITE
			</button>
		) : (
			<button className="btn--controller btn--remove">Removeeeeee</button>
		);
	};

	checkLibrary = (library, id) =>
		Object.keys(library).find((gif_id) => gif_id === id);

	render() {
		const { gifDetails: details, library } = this.props.gifs;
		const check = this.checkLibrary(library, details.id);

		return (
			<div className="favorites">{this.checkTheLibrary(check, details)}</div>
		);
	}
}

export default inject('gifs')(observer(Favorites));
