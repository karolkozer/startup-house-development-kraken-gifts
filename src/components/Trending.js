import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

// Import components
import FormSort from './Form_Sort';
import Gifs from './Gifs';

class Trending extends React.Component {
	static contextTypes = {
		fetchGifs: PropTypes.func
	};

	componentDidMount() {
		// Fetch data
		this.props.gifs.fetchGifs();
	}

	render() {
		return (
			<section className="section trending">
				<div className="row trending__row">
					<div className="trending__top">
						<h2 className="heading-second">Trending</h2>
						{/* <FormSort /> */}
					</div>
					<div className="trending__bottom">
						<Gifs />
					</div>
				</div>
			</section>
		);
	}
}

export default inject('gifs')(observer(Trending));
