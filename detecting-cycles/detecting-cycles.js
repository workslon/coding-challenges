/**
 * DETECTING CYCLES
 * Moderate
 * https://www.codeeval.com/open_challenges/5/
 *
 * 1. Get last element - this element will be 100% the element from the cycle
 * 2. Get the first entry index of the element that is same as the last element
 * 3. Push elements following that element to the `result` array until there are no repeations
 */

var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function (err, data) {
  data.split('\n').forEach(function (chunk) {
    chunk = chunk.split(' ');
    var el = chunk[chunk.length - 1],
        i = chunk.indexOf(el) + 1,
        result = [], l;

    for (l = chunk.length; i < l; i ++) {
      if (~result.indexOf(chunk[i])) {
        break;
      }

      result.push(chunk[i]);
    }

    console.log(result.join(' '));
  });
});