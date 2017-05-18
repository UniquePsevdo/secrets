import React, {Component} from 'react';
import {Link} from 'react-router';

class SideNav extends Component {
	
	componentWillMount() {
		
	}
	
	componentDidMount(){
		$(".button-collapse").sideNav();
	}
	
	componentDidUpdate(){
		$(".button-collapse").sideNav();
	}
	
	render() {
		return (
			<div>
				<ul id="slide-out" className="side-nav fixed">
					<li><Link to={'/test'}>Test</Link></li>
				</ul>
			</div>
		)
	}
}

export default SideNav;