const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/*', (req, res) => {
	res.redirect('/');
});

app.post('/form1', (req, res) => {
	console.log(req.body);
	res.send('POST request received');
});

app.post('/form2', (req, res) => {
	console.log(req.body);
	res.send('POST request received');
});

app.post('/form3', (req, res) => {
	console.log(req.body);
	res.send('POST request received');
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('Listening on port ' + port + '...');
});