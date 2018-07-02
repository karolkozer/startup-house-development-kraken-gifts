import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Load from './Load';

class LoadMore extends React.Component {
	static contextTypes = {
		fetchMore: PropTypes.func,
		isNextPageLoaded: PropTypes.bool
	};

	handleMore = (fetchMore) => fetchMore();

	render() {
		const { isNextPageLoaded, fetchMore } = this.props.gifs;
		return (
			<div className="load-more">
				{isNextPageLoaded ? (
					<button
						onClick={() => this.handleMore(fetchMore)}
						className="btn btn--more"
					>
						More GIFs
					</button>
				) : (
					<Load />
				)}
			</div>
		);
	}
}

export default inject('gifs')(observer(LoadMore));
