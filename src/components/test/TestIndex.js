import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/testActions';

class TestIndex extends Component {
	componentWillMount(){
		this.props.getTest();
	}
	
	render() {
		return (
			<div className="row">
				<div className="col s9 offset-s3">TestIndex</div>
				{console.log(this.props)}
			</div>
		);
	};
}
;

const mapStateToProps = (state) => {
	return {
		test: state.test
	};
};


export default connect(mapStateToProps, actions)(TestIndex);