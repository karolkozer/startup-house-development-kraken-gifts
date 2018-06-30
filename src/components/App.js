import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Import components
import Header from './Header';
import Trending from './Trending';

export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<main className="main">
					<Switch>
						<Redirect exact from="/" to="/trending" />
						<Route path="/trending" component={Trending} />
					</Switch>
				</main>
			</div>
		);
	}
}
