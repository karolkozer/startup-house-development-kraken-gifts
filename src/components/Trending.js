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
		fetchGifs: PropTypes.func,
		gifsData: PropTypes.array
	};

	componentDidMount() {
		// Fetch data
		this.props.gifs.fetchGifs();
	}

	// Check if tere are gifs in the store, return loader
	checkGifs = (gifs) =>
		gifs.length === 0 ? (
			<Load />
		) : (
			<React.Fragment>
				<Gifs />
				<LoadMore />
			</React.Fragment>
		);

	render() {
		const gifs = this.props.gifs.gifsData;
		return (
			<section className="section trending">
				<div className="row trending__row">
					<div className="trending__top">
						<h2 className="heading-second">Trending</h2>
						<FormSort />
					</div>
					<div className="trending__bottom">{this.checkGifs(gifs)}</div>
				</div>
			</section>
		);
	}
}

export default inject('gifs')(observer(Trending));
