import React from 'react';
import { Title, Link } from '@components';
// STYLE
import './App.scss';

const App = (): JSX.Element => {
	return (
		<div className="App">
			<span className="App__title">
				<Title id="app" content="react-setup" />
			</span>
			<div className="App__links">
				<Link id="app" label=".js" href="" size="lg" />
				<Link id="app" label=".ts" href="https://github.com/cl4pper/react-setup" size="lg" />
			</div>
		</div>
	);
};

export default App;
