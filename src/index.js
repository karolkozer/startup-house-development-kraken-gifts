import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Import css
import './css/main.css';

// Import Components
import App from './components/App';

const Root = () => (
	<BrowserRouter>
		<React.Fragment>
			<App />
		</React.Fragment>
	</BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
