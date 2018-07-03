import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject, propTypes } from 'mobx-react';
import checkRating from '../helpers/raiting';

// Import components
import Favorites from './Favorites';

class GifDetails extends React.Component {
	static contextTypes = {
		gifDetails: PropTypes.object
	};

	render() {
		const { gifDetails: details } = this.props.gifs;
		return (
			<React.Fragment>
				<div className="details__gif">
					<figure className="details__figure">
						<img
							src={details.images.downsized_medium.url}
							alt="Gif"
							className="details__img"
						/>
					</figure>
				</div>
				<div className="details__description">
					<h4 className="heading-fourth">{details.title}</h4>
					<p className="details__type">Type: {details.type}</p>
					<p className="details__rating">
						Raiting: {checkRating(details.rating)}
					</p>
					<Favorites />
				</div>
			</React.Fragment>
		);
	}
}

export default inject('gifs')(observer(GifDetails));
