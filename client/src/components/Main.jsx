import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import Form1 from './Form1.jsx';

class Main extends React.Component {
	render() {
		return (
			<div>
			  <Switch>
		      <Route exact path="/" render={() => (
		        <LandingPage/>
		      )}/>
		      <Route path="/form1" render={() => (
		      	<Form1/>
	      	)}/>
	      </Switch>
			</div>
		)	
	}
}

export default Main;