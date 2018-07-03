import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

// Import icons
import icon from '../img/icons/sprite-icons.svg';

class Favorites extends React.Component {
	static contextTypes = {
		gifs: PropTypes.shape({
			library: PropTypes.object,
			gifDetails: PropTypes.object,
			addToLibrary: PropTypes.func,
			removeFromLibrary: PropTypes.func
		})
	};

	addToLibrary = (gif) => {
		const { library, addToLibrary } = this.props.gifs;
		// Add gif to library
		addToLibrary(gif);
		// Update local storage
		localStorage.setItem('kraken-library', JSON.stringify(library));
	};

	removeFromLibrary = (gif) => {
		const { library, removeFromLibrary } = this.props.gifs;
		// Remove gif from library
		removeFromLibrary(gif);
		// Update local storage
		localStorage.setItem('kraken-library', JSON.stringify(library));
	};

	// Chek if gif is already in the library, return btn add or remove
	checkTheLibrary = (check, details) =>
		!check ? (
			<button
				onClick={() => this.addToLibrary(details)}
				className="btn btn--controller btn--add"
			>
				<svg className="icon icon--controller">
					<use xlinkHref={`${icon}#icon-heart-o`} />
				</svg>
				Like
			</button>
		) : (
			<button
				onClick={() => this.removeFromLibrary(details)}
				className="btn btn--controller btn--remove"
			>
				<svg className="icon icon--controller">
					<use xlinkHref={`${icon}#icon-heart`} />
				</svg>
				Love
			</button>
		);

	// Chek if gif is already in the library
	checkLibrary = (library, id) =>
		Object.keys(library).find((gif_id) => gif_id === id);

	render() {
		// Get data from store
		const { gifDetails: details, library } = this.props.gifs;
		// Chek if gif is already in the library in order to render the component with udpated library
		const check = this.checkLibrary(library, details.id);

		return (
			<div className="favorites">{this.checkTheLibrary(check, details)}</div>
		);
	}
}

export default inject('gifs')(observer(Favorites));
