import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

// Import store
import stores from './stores';

// Import css
import './css/main.css';

// Import Components
import App from './components/App';

const Root = () => (
	<Provider gifs={stores.gifs} media={stores.media}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
