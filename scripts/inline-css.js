var fs = require('fs');
var path = require('path');

var outDir = path.join(__dirname, '..', 'out');

function inlineCss(htmlPath) {
  var html = fs.readFileSync(htmlPath, 'utf8');
  var count = 0;

  html = html.replace(
    /<link rel="stylesheet" href="(\/_next\/static\/css\/[^"]+\.css)" data-precedence="next"\/>/g,
    function(match, cssHref) {
      var cssPath = path.join(outDir, cssHref);
      var exists = fs.existsSync(cssPath);
      count++;
      console.log('  [' + path.basename(htmlPath) + '] #' + count + ' ' + cssHref + ' exists=' + exists);
      if (exists) {
        var css = fs.readFileSync(cssPath, 'utf8');
        return '<style>' + css + '</style>';
      }
      return match;
    }
  );

  html = html.replace(/\d+:HL\[\\"(\/_next\/static\/css\/[^"]+\.css)\\",\\"style\\"\]\\n/g, '');

  fs.writeFileSync(htmlPath, html);
  return count;
}

var htmlFiles = fs.readdirSync(outDir).filter(function(f) { return f.endsWith('.html'); });
var total = 0;
htmlFiles.forEach(function(f) {
  var c = inlineCss(path.join(outDir, f));
  total += c;
});
console.log('Replaced ' + total + ' links across ' + htmlFiles.length + ' HTML files');
