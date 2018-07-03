import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Gifs extends React.Component {
	static contextTypes = {
		gifsData: PropTypes.array
	};

	checkGifUrl = (url) =>
		url ? url : 'https://media2.giphy.com/media/3DlbzSll6cskZZXSo5/200w.gif';

	checkGifTitle = (title) =>
		title ? <p className="gifts__title">{title}</p> : '';

	handleGift = (gifs) => {
		return gifs.map((gif, index) => (
			<li key={`${gif.id}-${index}`} className="gifts__item">
				<Link to={`/gif/${gif.id}`} className="gifts__link">
					<figure className="gifts__figure">
						<img
							src={this.checkGifUrl(gif.images.fixed_width.url)}
							alt="Gift"
							className="gifts__img"
						/>
					</figure>
					<div className="gifts__description">
						{this.checkGifTitle(gif.title)}
					</div>
				</Link>
			</li>
		));
	};

	render() {
		const gifs = this.props.gifs;
		return <ul className="gifts">{this.handleGift(gifs)}</ul>;
	}
}
