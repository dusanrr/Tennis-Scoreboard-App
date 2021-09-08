const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const io = require('socket.io').listen(server);

const port = 9090;

server.listen(port);
console.log(`Listening on :${port}`);

// routing
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
