var http = require('http');
var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'out');
var port = process.argv[2] || 3001;

var mimeTypes = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.txt': 'text/plain', '.xml': 'application/xml',
  '.woff2': 'font/woff2',
};

http.createServer(function(req, res) {
  var url = req.url.split('?')[0];
  var candidates = [
    path.join(dir, url),
    path.join(dir, url + '.html'),
    path.join(dir, url, 'index.html'),
    path.join(dir, 'index.html'),
  ];

  for (var i = 0; i < candidates.length; i++) {
    if (fs.existsSync(candidates[i]) && fs.statSync(candidates[i]).isFile()) {
      var ext = path.extname(candidates[i]);
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(candidates[i]).pipe(res);
      return;
    }
  }

  res.writeHead(404);
  res.end('Not found');
}).listen(port, function() {
  console.log('Serving out/ at http://localhost:' + port);
});
