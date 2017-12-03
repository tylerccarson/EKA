import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserId } from '../redux/actionCreators.js';

class Form1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password1: '',
			password2: '',
			email: '',
			redirect: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.saveData = this.saveData.bind(this);
	}

	props: {
    userId: Number,
    setUserId: Function
	};

	handleChange(event) {
    this.setState({
    	[event.target.name]: event.target.value
    });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.saveData();
	}

	saveData() {
		if (this.state.username.length <= 8) {
			alert('Please choose a username longer than 8 characters.');

		} else if (this.state.password1 !== this.state.password2) {
			alert('Passwords do not match. Try again.');

		} else if (this.state.password1.length <= 8) {
			alert('Please choose a password longer than 8 characters.');

		} else if (this.state.email.indexOf('@') < 0) {
			alert('Please enter a valid email address.');

		} else {

			let data = {
				username: this.state.username,
				password: this.state.password1,
				email: this.state.email
			};

      axios.post('/form1', data)
        .then((res) => {
        	//update application state
        	this.props.setUserId(res.data.id);

        	//redirect
        	this.setState({
        		redirect: true
        	});
        })
        .catch((err) => {
        	console.log('error submitting form1 data ', err);
        });
		}
	}

	render() {

		if (this.state.redirect) {
      return (
        <Redirect to="/form2"/>
      )
    }

		const style = {
			form: {
				display: 'flex',
				flexDirection: 'column'
			},
			button: {
				width: '50px'
			}
		}

		return (
			<div >
				<form style={style.form} onSubmit={this.handleSubmit}>
				  <label>
				    username:
				    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
				  </label>
				  <label>
				    password:
				    <input type="password" name="password1" value={this.state.password1} onChange={this.handleChange}/>
				  </label>
				  <label>
				    type password again:
				    <input type="password" name="password2" value={this.state.password2} onChange={this.handleChange}/>
				  </label>
				  <label>
				    email:
				    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
				  </label>
				  <input style={style.button} type="submit" value="SAVE"/>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { userId: state.userId	};
};

const mapDispatchToProps = { setUserId };

export default connect(mapStateToProps, mapDispatchToProps)(Form1);