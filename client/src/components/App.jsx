import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';

class App extends React.Component {
  constructor(props) {
  	super(props);
	  this.state = {
      id: null
	  }
	  this.setUserId = this.setUserId.bind(this);
	  this.resetUserId = this.resetUserId.bind(this);
  }

  setUserId(id) {
    this.setState({
    	id: id
    });
  }

  resetUserId() {
  	this.setState({
    	id: null
    });
  }

	render() {
		return (
			<div>
			  <Header/>
			  <Main setUserId={this.setUserId} resetUserId={this.resetUserId} id={this.state.id}/>
			</div>
		)
	}
}

export default App;