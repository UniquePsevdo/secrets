import { createStore, applyMiddleware, compose } from "redux";
//import createSagaMiddleware from "redux-saga";
import ReduxThunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import freeze from "redux-freeze";
import reducers from "./reducers/index";
//import { sagas } from "./sagas/index";

// add the middlewares
let middlewares = [];

// add the router middleware
middlewares.push(ReduxThunk);

/*
// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
*/

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
	middlewares.push(freeze);
	middlewares.push(reduxImmutableStateInvariant());
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
	middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(reducers, middleware);

//sagaMiddleware.run(sagas);

// export
export { store };
