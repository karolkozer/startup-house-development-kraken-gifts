import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

class Gifs extends React.Component {
	static contextTypes = {
		gifsData: PropTypes.array
	};

	checkGifUrl = (url) =>
		url ? url : 'https://media2.giphy.com/media/3DlbzSll6cskZZXSo5/200w.gif';

	checkGifTitle = (title) =>
		title ? (
			<Link to="/gift/:id" className="gifts__link">
				{title}
			</Link>
		) : (
			''
		);

	handleGift = (gifs) => {
		return gifs.map((gif, index) => (
			<li key={`${gif.id}-${index}`} className="gifts__item">
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
			</li>
		));
	};

	render() {
		const gifs = this.props.gifs.gifsData;
		return <ul className="gifts">{this.handleGift(gifs)}</ul>;
	}
}

export default inject('gifs')(observer(Gifs));
