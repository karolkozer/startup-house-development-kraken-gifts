import React from 'react';

import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

// Import icons
import icon from '../img/icons/sprite-icons.svg';

class FormSort extends React.Component {
	static contextTypes = {
		changeSortOptions: PropTypes.func
	};

	state = {
		selectValue: ''
	};

	change = (e) => {
		const value = e.target.value;
		this.props.gifs.changeSortOption();
		this.setState({ selectValue: value });
	};

	render() {
		return (
			<form className="form-sort">
				<p className="form-sort__text">Sort:</p>

				<select
					name="sort"
					id="sort"
					className="form-sort__select"
					onChange={this.change}
					value={this.state.value}
				>
					<option value="latest" className="form-sort__option">
						latest GIFs
					</option>
					<option value="old" className="form-sort__option">
						old GIFs
					</option>
				</select>
				<span className="form-sort__icon_box">
					<svg className="icon icon--sort">
						<use xlinkHref={`${icon}#icon-chevron-up`} />
					</svg>
				</span>
			</form>
		);
	}
}

export default inject('gifs')(observer(FormSort));
