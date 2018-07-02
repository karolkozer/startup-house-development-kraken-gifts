import React from 'react';

// Import icons
import icon from '../img/icons/sprite-icons.svg';

const Load = () => (
	<div className="load">
		<div className="load__box">
			<svg className="icon icon--logo icon--logo_load">
				<use xlinkHref={`${icon}#icon-google`} />
			</svg>
		</div>
	</div>
);

export default Load;
