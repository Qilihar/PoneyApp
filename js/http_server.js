var http = require('http');
http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.write('Bienvenue sur la Poney App\'\n');
	  res.end('Test 123');
}).listen(8080, "localhost");
console.log('Server running at http://127.0.0.1:8080/');
console.log('Le console log de Suki');
