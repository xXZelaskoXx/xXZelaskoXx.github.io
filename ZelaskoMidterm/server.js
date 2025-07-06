/*
Dylan Zelasko
CITC 2390

Mid-term project

server: javascript file that instantiates node js server on machine

business: Doug's Burger Shack (fictional)
*/

/*

SCRIPT HAS BEEN SCRAPPED AS AN EASIER, MORE EFFECTIVE METHOD WAS FOUND THROUGH NPM IN NODE

//requires http module from node js
const http = require('node:http');

//require fs to read files
const fs = require("node:fs");

//require express to navigate files
const express = require('express');

//instantiat an express object
const ex = express();

//get each file for project loaded onto node
ex.get('/*', function(req, res) {
	targetData = fs.readFile(req.url, function(err,targetData) {
	res.setHeader('Content-Type','text/html');
	res.send(targetData);
	});
});

//hostname for server, placeholder to run locally on machine
const hostName = "127.0.0.1";

//port for server, can be changed as need by end user
const port = 4200;

//createServer() from node to host the website
const server = http.createServer((req, res) => {
	fs.readFile('index.html', (err, data) => {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});
});

server.listen(port, hostName, () => {
	console.log("server running at " + hostName + "on Port " + port);
});

*/