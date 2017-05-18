import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { history } from "./store.js";
import TestIndex from './components/test/TestIndex';

import Home from './components/Home';

const Routes = () => {
	return (
		<Router history={history}>
			<Route path="/" component={Home}>
				<IndexRoute component={TestIndex} />
				<Route path="test" component={TestIndex} />
			</Route>
		</Router>
	);
};

export default Routes;