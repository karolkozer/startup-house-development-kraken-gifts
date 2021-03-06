import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Import components
import Header from './Header';
import Trending from './Trending';
import Search from './Search';
import Details from './Details';
import Likes from './Likes';
import NotFoundPage from './Not_Found_Page';

export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<main className="main">
					<Switch>
						<Redirect exact from="/" to="/trending" />
						<Route path="/trending" component={Trending} />
						<Route path="/search/:query" component={Search} />
						<Route path="/gif/:id" component={Details} />
						<Route path="/likes" component={Likes} />
						<Route component={NotFoundPage} />
					</Switch>
				</main>
			</div>
		);
	}
}
