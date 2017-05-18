import React from 'react';
import Header from './Header';
import SideNav from './SideNav';
import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';

const Home = ({children}) => {
	return (
		<div className="container">
			<NotificationsSystem theme={theme}/>
			<SideNav/>
			<Header />
			{children}
		</div>
	);
};

export default Home;
