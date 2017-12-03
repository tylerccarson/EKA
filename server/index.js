const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/*', (req, res) => {
	res.redirect('/');
});

app.post('/form1', (req, res) => {

	User.forge({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email
	}).save()
	  .then(user => {
			res.send(user);
	  })
	  .catch(err => {
	  	console.log(err);
	  	res.status(503).send(err);
	  })
});

app.post('/form2', (req, res) => {
	console.log(req.body);

  User.forge({
  	id: req.body.id,
		first: req.body.first,
		last: req.body.last,
		telephone: req.body.telephone
	}).save()
	  .then(user => {
			res.send(user);
	  })
	  .catch(err => {
	  	console.log(err);
	  	res.status(503).send(err);
	  })
});

app.post('/form3', (req, res) => {
	console.log(req.body);
	User.forge({
  	id: req.body.id,
		street: req.body.street,
		city: req.body.city,
		state: req.body.state,
		zip: req.body.zip
	}).save()
	  .then(user => {
			res.send(user);
	  })
	  .catch(err => {
	  	console.log(err);
	  	res.status(503).send(err);
	  })
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('Listening on port ' + port + '...');
});