var http = require('http');

var app = http.createServer(function(req, res) {
res.writeHead(200);
var timeInMss = new Date(Date.now()).toLocaleString();
res.write('Current Date and time is ' +timeInMss);
res.end();
});
app.listen(4000);
