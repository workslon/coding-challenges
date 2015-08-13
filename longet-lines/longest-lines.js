/**
 * Longest Lines
 * Moderate
 * https://www.codeeval.com/open_challenges/2/
 */

var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function (err, data) {
  var dataArray = data.split('\n'),
      numberOfLines = parseInt(dataArray.shift());

  dataArray.sort(function (a, b) {
    return a.length - b.length;
  })
  .reverse();

  for (var i = 0; i < dataArray.length; i ++) {
    if (i === numberOfLines) break;
    console.log(dataArray[i]);
  }
});
