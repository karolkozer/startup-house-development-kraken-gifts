import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

// Import components
import Gifs from './Gifs';
import Load from './Load';
import NotFoundMessage from './Not_Found_Message';

class Search extends React.Component {
	static contextTypes = {
		isDataLoaded: PropTypes.bool,
		fetchSearchGif: PropTypes.func,
		gifsData: PropTypes.array,
		query: PropTypes.string
	};

	componentDidMount() {
		// Get the router path query
		const query = this.props.match.params.query;
		// Fetch the data
		this.props.gifs.fetchSearchGifs(query);
	}

	componentDidUpdate(prevProps) {
		// Get the router path query
		const query = this.props.match.params.query;
		// Get the previous router path query
		const prev = prevProps.match.params.query;
		// If the query is not the same, fetch the data
		if (prev !== query) this.props.gifs.fetchSearchGifs(query);
	}

	// Check if gifs are loaded
	checkIfLoaded = (isDataLoaded) => (isDataLoaded ? <Gifs /> : <Load />);

	// Check if there are gifs in the store, return message
	checkGifs = (gifs, isDataLoaded) => {
		if (isDataLoaded && gifs.length === 0) return <NotFoundMessage />;
	};

	render() {
		const { gifsData: gifs, isDataLoaded } = this.props.gifs;
		const query = this.props.match.params.query;
		return (
			<section className="section search">
				<div className="row search__row">
					<div className="search__top">
						<h2 className="heading-second">{`Search results for "${query}"`}</h2>
					</div>
					<div className="search__bottom">
						{this.checkIfLoaded(isDataLoaded)}
						{this.checkGifs(gifs, isDataLoaded)}
					</div>
				</div>
			</section>
		);
	}
}

export default inject('gifs')(observer(Search));
