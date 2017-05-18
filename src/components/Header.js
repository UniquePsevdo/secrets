import React, {Component} from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';

class Header extends Component {
	/*constructor(props) {
		super(props);
		
		this.state = {id: null};
	}*/
	
	/*componentWillMount() {
		this.setLink();
	}*/
		
	render() {
		return (
		<div>
			<Navbar brand='logo' right>
				<NavItem href=''><Icon>search</Icon></NavItem>
				<NavItem href=''><Icon>view_module</Icon></NavItem>
				<NavItem href=''><Icon>refresh</Icon></NavItem>
				<NavItem href=''><Icon>more_vert</Icon></NavItem>
			</Navbar>
		</div>
		);
	}
}
;

export default Header;
