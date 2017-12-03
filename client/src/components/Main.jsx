import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';

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
	      	<Route path="/form2" render={() => (
		      	<Form2/>
	      	)}/>
	      	<Route path="/form3" render={() => (
		      	<Form3/>
	      	)}/>
	      </Switch>
			</div>
		)	
	}
}

export default Main;