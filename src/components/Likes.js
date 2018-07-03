import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

// Import components
import Gifs from './Gifs';
import NotFoundMessage from './Not_Found_Message';

class Likes extends React.Component {
	static contextTypes = {
		isDataLoaded: PropTypes.bool
	};

	componentDidMount() {
		// Check local storage
		const storage = JSON.parse(localStorage.getItem('kraken-library'));
		this.props.gifs.library = storage || {};
	}

	checkLibrary = (library) =>
		library.length === 0 ? <NotFoundMessage /> : <Gifs gifs={library} />;

	render() {
		// Get library data
		const library = this.props.gifs.library;
		// Convert data
		const convertedLibrary = Object.values(library);
		return (
			<section className="section likes">
				<div className="row likes__row">
					<div className="likes__top">
						<h2 className="heading-second">Your Likes</h2>
					</div>
					<div className="likes__bottom">
						{this.checkLibrary(convertedLibrary)}
					</div>
				</div>
			</section>
		);
	}
}

export default inject('gifs')(observer(Likes));
