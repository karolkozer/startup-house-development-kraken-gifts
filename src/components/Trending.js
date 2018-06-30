import React from 'react';

// Import components
import FormSort from './Form_Sort';
import Gifts from './Gifts';

export default class Trending extends React.Component {
	render() {
		return (
			<section className="section trending">
				<div className="row trending__row">
					<div className="trending__top">
						<h2 className="heading-second">Trending</h2>
						<FormSort />
					</div>
					<div className="trending__bottom">
						<Gifts />
					</div>
				</div>
			</section>
		);
	}
}
