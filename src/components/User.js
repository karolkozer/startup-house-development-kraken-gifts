import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

class User extends React.Component {
	static contextTypes = {
		gifDetails: PropTypes.object
	};

	handleUser = (details) =>
		details.user ? (
			<div className="user">
				<a
					href={details.user.profile_url}
					target="blank"
					className="user__username"
				>
					<figure className="user__figure">
						<img src={details.user.avatar} alt="" className="user__avatar" />
					</figure>
					{details.user.display_name}
				</a>
			</div>
		) : (
			''
		);

	render() {
		const { gifDetails: details } = this.props.gifs;
		return this.handleUser(details);
	}
}

export default inject('gifs')(observer(User));
