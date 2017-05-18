import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setLanguage} from '../actions/i18nActions';
import ReactDOM from 'react-dom'

class LangSwitcher extends Component {
	constructor(props) {
		super(props);
	}
	
	handleSelectChange(event) {
		this.props.setLanguage(event.target.value);
	}
	
	
	componentDidMount() {
		$(ReactDOM.findDOMNode(this.refs.langSelect)).on('change', this.handleSelectChange.bind(this));
		const element = ReactDOM.findDOMNode(this.refs.langSelect);
		
		$(element).ready(function() {
			$('select').material_select();
		});
	}
	
	emptyFunction(){}
	
	render() {
		return (
			<div className="input-field col s12">
				<select value={this.props.lang} onChange={this.emptyFunction} ref="langSelect">
					<option value="en">ENGLISH</option>
					<option value="de">DEUTSCH</option>
				</select>
				<label>Select Locale</label>
			</div>
		)
	}
	
}

const mapStateToProps = (state) => {
	return {
		lang: state.locales.lang || 'en'
	};
};

export default connect(mapStateToProps, {setLanguage})(LangSwitcher);