import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

class Favorites extends React.Component {
	static contextTypes = {};

	addToLibrary = (gif) => {
		this.props.gifs.addToLibrary(gif);
		console.log(this.props.gifs.library);
	};

	checkTheLibrary = (details) => {
		console.log('Library', this.props.gifs.library);
		console.log('Before', details.id);
		console.log(Object.keys(this.props.gifs.library));
		const checkLibrary = this.props.gifs.checkLibrary(details.id);
		console.log(checkLibrary);
		return !checkLibrary ? (
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

	render() {
		const { gifDetails: details } = this.props.gifs;
		return <div className="favorites">{this.checkTheLibrary(details)}</div>;
	}
}

export default inject('gifs')(observer(Favorites));
