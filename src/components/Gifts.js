import React from 'react';
import { Link } from 'react-router-dom';

const Gifts = () => (
	<ul className="gifts">
		<li className="gifts__item">
			<figure className="gifts__figure">
				<img
					src="https://media2.giphy.com/media/5z9HX968H31lsVcFBr/200w.webp"
					alt="Gift"
					className="gifts__img"
				/>
			</figure>
			<div className="gifts__description">
				<Link to="/gift/:id" className="gifts__link">
					Season 2 LOL Gif by marlon
				</Link>
			</div>
		</li>
	</ul>
);

export default Gifts;
