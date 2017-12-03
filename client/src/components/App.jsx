import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import { Provider } from 'react-redux';
import store from '../redux/store.js';

class App extends React.Component {
	render() {
		return (
      <Provider store={store}>
  			<div>
  			  <Header/>
  			  <Main/>
  			</div>
      </Provider>
		)
	}
}

export default App;