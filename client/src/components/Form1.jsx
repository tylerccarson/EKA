import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Form1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			email: '',
			redirect: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.saveData = this.saveData.bind(this);
	}

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
		if (this.state.username.length > 0 && this.state.password.length > 0 && this.state.email.length > 0) {
			let data = {
				username: this.state.username,
				password: this.state.password,
				email: this.state.email
			};
      axios.post('http://localhost:3000/form1', data)
        .then((res) => {
        	console.log('form1 data submitted', res);
        	this.props.setUserId(res.data.id);
        	this.setState({
        		redirect: true
        	});
        })
        .catch((err) => {
        	console.log('error submitting form1 data ', err);
        });
		} else {
			alert('Please fill out all form fields to proceed')
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
				    <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
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

export default Form1;