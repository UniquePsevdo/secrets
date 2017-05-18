import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Routes from './router';
import $ from 'jquery';
var jQuery = $;
window.jQuery = $;
require ('../assets/libs/materialize-compressed')(jQuery, $);
import '../style/css/materialize.css';
import '../style/css/test.css';
import '../style/scss/main.scss';
import { store } from "./store.js";
import ConnectedIntlProvider from './components/ConnectedIntlProvider';

const App = () => {
	return (
		<Provider store={store}>
			<ConnectedIntlProvider>
				<Routes />
			</ConnectedIntlProvider>
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
