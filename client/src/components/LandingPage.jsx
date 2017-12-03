import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
	render() {
		return (
			<div>
			  <Link to="/form1">
          <button type="button">
            Sign Up!
          </button>
        </Link>
      </div>
		)
	}
}

export default LandingPage;