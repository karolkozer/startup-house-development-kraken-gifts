import React from 'react';
import NotFoundMessage from './Not_Found_Message';

const NotFoundPage = () => (
	<section className="section not-found-page">
		<div className="row not-found-page__row">
			<div className="not-found-page__content">
				<NotFoundMessage />
			</div>
		</div>
	</section>
);

export default NotFoundPage;
