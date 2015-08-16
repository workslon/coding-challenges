var fs = require('fs');
var path = require('path');
var name = process.argv[2];
var dir = './' + name;
var challengeTmpl = 
"/**\n\
 * Challenge\n\
 * Level\n\
 * URL\n\
 */\n\
\n\
var fs = require('fs');\n\
\n\
fs.readFile(process.argv[2], 'utf-8', function (err, data) {\n\
\n\
})\n"

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);

    console.log('"' + name + '" directory was created.');

    fs.writeFile(path.join(dir, name + '.js'), challengeTmpl, function(err) {
      if(err) {
        return console.log(err);
      }

      console.log('"' + name + '.js" file was created.');
    });

    fs.writeFile(path.join(dir, 'test-file.txt'), '', function(err) {
      if(err) {
        return console.log(err);
      }

      console.log('"test-file.txt" file was created.');
    });
}