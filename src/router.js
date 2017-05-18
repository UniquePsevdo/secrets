import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import TestIndex from './components/test/TestIndex';

import Home from './components/Home';

const Routes = () => {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={Home}>
				<IndexRoute component={TestIndex} />
				<Route path="test" component={TestIndex} />
			</Route>
		</Router>
	);
};

export default Routes;