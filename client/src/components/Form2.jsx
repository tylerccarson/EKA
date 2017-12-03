import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

class Form2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first: '',
			last: '',
			telephone: '',
			redirect: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.saveData = this.saveData.bind(this);
	}

	props: {
    userId: Number
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
		if (this.state.first.length === 0 || this.state.last.length === 0) {
			alert('Please enter your full name');

		} else if (this.state.telephone.length !== 10 || parseInt(this.state.telephone) === NaN) {
			alert('Please enter a valid 10-digit telephone number, no dashes.');

		} else {
			let data = {
				id: this.props.id,
				first: this.state.first,
				last: this.state.last,
				telephone: this.state.telephone
			};
      axios.post('/form2', data)
        .then((res) => {
        	this.setState({
        		redirect: true
        	});
        })
        .catch((err) => {
        	console.log('error submitting form2 data ', err);
        });
		}
	}

	render() {

		if (this.state.redirect) {
      return (
        <Redirect to="/form3"/>
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
				    first:
				    <input type="text" name="first" value={this.state.first} onChange={this.handleChange}/>
				  </label>
				  <label>
				    last:
				    <input type="text" name="last" value={this.state.last} onChange={this.handleChange}/>
				  </label>
				  <label>
				    telephone:
				    <input type="text" name="telephone" value={this.state.telephone} onChange={this.handleChange}/>
				  </label>
				  <input style={style.button} type="submit" value="SAVE"/>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return state.userId;
};

export default connect(mapStateToProps)(Form2);