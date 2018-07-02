import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

class Gifs extends React.Component {
	static contextTypes = {
		gifsData: PropTypes.array
	};

	handleGift = (gifs) => {
		return gifs.map((gift) => (
			<li key={gift.id} className="gifts__item">
				<figure className="gifts__figure">
					<img
						src={gift.images.fixed_width.url}
						alt="Gift"
						className="gifts__img"
					/>
				</figure>
				<div className="gifts__description">
					<Link to="/gift/:id" className="gifts__link">
						{gift.title}
					</Link>
				</div>
			</li>
		));
	};

	render() {
		const gifs = this.props.gifs.gifsData;
		return <ul className="gifts">{this.handleGift(gifs)}</ul>;
	}
}

export default inject('gifs')(observer(Gifs));
