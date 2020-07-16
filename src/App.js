import React from 'react';
import { Link } from 'react-router-dom';
import MainRoutes from './components/MainRoutes';
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl';
import './App.css';

export default class App extends React.Component {

  render() {

    return (
		<div className="App" style={{ fontFamily: 'Agency FB' }}>
			<Layout fixedHeader>
				<Header className="header" title={<Link style={{ textDecoration: 'none', color: '#fff', fontFamily: 'Agency FB', fontSize: '24px', fontStyle: 'italic' }} to="/">Orphée Christ NDONG</Link>} waterfall transparent>
					<Navigation>
						<Link style={{fontSize: '23px', fontWeight: '900'}} to="/services">Services & Réalisations</Link>
						<Link style={{fontSize: '23px', fontWeight: '900'}} to="/resume">Resume</Link>
						<Link style={{fontSize: '23px', fontWeight: '900'}} to="/contacts">Contacts</Link>
					</Navigation>
				</Header>
				<Drawer style={{backgroundColor: '#e22947', borderColor: '#e22947'}} title={<Link style={{ textDecoration: 'none', color: '#fff', fontFamily: 'Agency FB', fontSize: '25px', fontStyle: 'italic' }} to="/">Orphée NDONG</Link>}>
					<Navigation>							
						<Link style={{color: '#fff', fontSize: '23px'}} to="/services">Services & Réalisations</Link>
						<Link style={{color: '#fff', fontSize: '23px'}} to="/resume">Resume</Link>
						<Link style={{color: '#fff', fontSize: '23px'}} to="/contacts">Contacts</Link>
					</Navigation>
				</Drawer>
				<Content>
					<div className="page-content" />
					<MainRoutes />
				</Content>
			</Layout>
		</div>
    ); 
  }
}
