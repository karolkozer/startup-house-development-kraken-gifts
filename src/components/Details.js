import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import checkRating from '../helpers/raiting';

// Import components
import Load from './Load';
import GifDetails from './Gif_Details';

class Details extends React.Component {
	static contextTypes = {
		id: PropTypes.string,
		gifDetails: PropTypes.object,
		isDataLoaded: PropTypes.bool
	};

	componentDidMount() {
		// Get the router path query
		const id = this.props.match.params.id;
		// Fetch the data
		this.props.gifs.fetchGifDetails(id);
	}

	componentDidUpdate(prevProps) {
		// Get the router path query
		const id = this.props.match.params.id;
		// Get the previous router path query
		const prev = prevProps.match.params.id;
		// If the query is not the same, fetch the data
		if (prev !== id) this.props.gifs.fetchGifDetails(id);
	}

	checkIfLoaded = (isDataLoaded) => (isDataLoaded ? <GifDetails /> : <Load />);

	render() {
		const { gifDetails: details, isDetailsLoaded } = this.props.gifs;
		return (
			<section className="section details">
				<div className="row details__row">
					<div className="details__content">
						{this.checkIfLoaded(isDetailsLoaded)}
					</div>
				</div>
			</section>
		);
	}
}

export default inject('gifs')(observer(Details));
