import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

// Import components
import FormSort from './Form_Sort';
import Gifs from './Gifs';
import Load from './Load';
import LoadMore from './Load_More';

class Trending extends React.Component {
	static contextTypes = {
		isDataLoaded: PropTypes.bool
	};

	componentDidMount() {
		// Fetch data
		this.props.gifs.fetchGifs();
	}

	// Check if there are gifs in the store, return loader
	checkGifs = (isDataLoaded) =>
		isDataLoaded ? (
			<React.Fragment>
				<Gifs />
				<LoadMore />
			</React.Fragment>
		) : (
			<Load />
		);

	render() {
		const isDataLoaded = this.props.gifs.isDataLoaded;
		return (
			<section className="section trending">
				<div className="row trending__row">
					<div className="trending__top">
						<h2 className="heading-second">Trending</h2>
						<FormSort />
					</div>
					<div className="trending__bottom">{this.checkGifs(isDataLoaded)}</div>
				</div>
			</section>
		);
	}
}

export default inject('gifs')(observer(Trending));
