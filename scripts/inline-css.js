var fs = require('fs');
var path = require('path');

var outDir = path.join(__dirname, '..', 'out');
var nrPath = path.join(outDir, 'newrelic.js');
var nrScript = '';

if (fs.existsSync(nrPath)) {
  nrScript = '<script>' + fs.readFileSync(nrPath, 'utf8') + '<\/script>';
}

function process(htmlPath) {
  var html = fs.readFileSync(htmlPath, 'utf8');

  // Inline CSS
  html = html.replace(
    /<link rel="stylesheet" href="(\/_next\/static\/css\/[^"]+\.css)" data-precedence="next"\/>/g,
    function(match, cssHref) {
      var cssPath = path.join(outDir, cssHref);
      if (fs.existsSync(cssPath)) {
        return '<style>' + fs.readFileSync(cssPath, 'utf8') + '</style>';
      }
      return match;
    }
  );

  // Remove RSC CSS hints
  html = html.replace(/\d+:HL\[\\"(\/_next\/static\/css\/[^"]+\.css)\\",\\"style\\"\]\\n/g, '');

  // Inject New Relic script right after <head>
  if (nrScript) {
    html = html.replace('<head>', '<head>' + nrScript);
  }

  fs.writeFileSync(htmlPath, html);
}

var htmlFiles = fs.readdirSync(outDir).filter(function(f) { return f.endsWith('.html'); });
htmlFiles.forEach(function(f) { process(path.join(outDir, f)); });
console.log('Processed ' + htmlFiles.length + ' HTML files' + (nrScript ? ' (with New Relic)' : ''));
