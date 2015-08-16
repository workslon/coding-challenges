var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function (err, data) {
  data.split('\n').forEach(function (chunk) {

    if (chunk.trim() !== '') {
      var operands, operators, result = 0;

      chunk = chunk.replace(/\s/g, '');
      operators = chunk.match(/\D/g).reverse();
      operands = chunk.match(/\d/g);

      result = operands[0];

      for (var i = 0; i < operands.length - 1; i ++) {
        result = eval(result + (operators[i] || '') + (operands[i + 1] || ''));
      }

      console.log(result);
    }
  });
});