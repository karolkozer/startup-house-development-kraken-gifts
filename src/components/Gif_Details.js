import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import checkRating from '../helpers/raiting';
// Import icons
import icon from '../img/icons/sprite-icons.svg';

// Import components
import Favorites from './Favorites';
import User from './User';

class GifDetails extends React.Component {
	static contextTypes = {
		gifDetails: PropTypes.object,
		library: PropTypes.object
	};

	componentDidMount() {
		// Check local storage
		const storage = JSON.parse(localStorage.getItem('kraken-library'));
		this.props.gifs.library = storage || {};
	}

	render() {
		const { gifDetails: details } = this.props.gifs;
		return (
			<React.Fragment>
				<div className="gif-details">
					<figure className="gif-details__figure">
						<img
							src={details.images.downsized_medium.url}
							alt="Gif"
							className="gif-details__img"
						/>
					</figure>
				</div>
				<div className="gif-details__description">
					<h4 className="heading-fourth">{details.title}</h4>
					<p className="gif-details__type">Type: {details.type}</p>
					<p className="gif-details__rating">
						Raiting: {checkRating(details.rating)}
					</p>
					<a href={details.url} target="blank" className="gif-details__link">
						<svg className="icon icon--chain">
							<use xlinkHref={`${icon}#icon-chain`} />
						</svg>
						Link To Source
					</a>
					<User />
					<Favorites />
				</div>
			</React.Fragment>
		);
	}
}

export default inject('gifs')(observer(GifDetails));
