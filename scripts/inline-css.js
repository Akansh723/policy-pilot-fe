var fs = require('fs');
var path = require('path');

var outDir = path.join(__dirname, '..', 'out');

// New Relic: inline config + CDN loader
var nrConfigPath = path.join(outDir, 'newrelic-config.js');
var nrSnippet = '';
if (fs.existsSync(nrConfigPath)) {
  var config = fs.readFileSync(nrConfigPath, 'utf8');
  nrSnippet = '<script>' + config + '<\/script>' +
    '<script src="https://js-agent.newrelic.com/nr-loader-spa-current.min.js"><\/script>';
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

  // Inject New Relic right after <head>
  if (nrSnippet) {
    html = html.replace('<head>', '<head>' + nrSnippet);
  }

  fs.writeFileSync(htmlPath, html);
}

var htmlFiles = fs.readdirSync(outDir).filter(function(f) { return f.endsWith('.html'); });
htmlFiles.forEach(function(f) { process(path.join(outDir, f)); });
console.log('Processed ' + htmlFiles.length + ' HTML files' + (nrSnippet ? ' (with New Relic)' : ''));
