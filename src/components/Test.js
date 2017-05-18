import React, {Component} from 'react';
import {Button, Row, Col, Icon} from 'react-materialize';

class Test extends Component {
	render() {
		return (
			<Row>
				<Col s={3}>
					<Button waves='light'>Add<Icon left>add</Icon></Button>
				</Col>
				<Col s={3}>
					<Button waves='light'>Remove<Icon left>remove</Icon></Button>
				</Col>
				<Col s={3}>
					<div className="test1">123</div>
				</Col>
				<Col s={3}>
					<div className="test2">456</div>
				</Col>
			</Row>
		);
	};
};

export default Test;
