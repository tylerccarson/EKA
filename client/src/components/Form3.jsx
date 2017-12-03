import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

class Form3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			street: '',
			city: '',
			state: '',
			zip: '',
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
		if (this.state.street.length > 0 && this.state.city.length > 0 && this.state.state.length > 0 && this.state.zip.length === 5) {
			let data = {
				id: this.props.userId,
				street: this.state.street,
				city: this.state.city,
				state: this.state.state,
				zip: this.state.zip
			};
      axios.post('/form3', data)
        .then((res) => {
        	//this.props.resetUserId();
        	this.setState({
        		redirect: true
        	});
        })
        .catch((err) => {
        	console.log('error submitting form3 data ', err);
        });
		} else {
			alert('Please enter a valid address');
		}
	}

	render() {

		if (this.state.redirect) {
      return (
        <Redirect to="/"/>
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
				    street:
				    <input type="text" name="street" value={this.state.street} onChange={this.handleChange}/>
				  </label>
				  <label>
				    city:
				    <input type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
				  </label>
				  <label>
				    state:
				    <input type="text" name="state" value={this.state.state} onChange={this.handleChange}/>
				  </label>
				  <label>
				    zip:
				    <input type="text" name="zip" value={this.state.zip} onChange={this.handleChange}/>
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

export default connect(mapStateToProps)(Form3);