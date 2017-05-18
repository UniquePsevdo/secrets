import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';

class Task extends Component {
	render() {
		return (
			<Row>
				<Col s={6}>
					<div>This is a task</div>
				</Col>
			</Row>
		);
	}
}

export default Task;
