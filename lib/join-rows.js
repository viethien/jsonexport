var os = require('os');
var _ = require('underscore');

module.exports = function joinRows(rows, join) {
  if (!rows || !_.isArray(rows)) {
    throw new TypeError('Invalid params "rows" for joinRows.' +
                        ' Must be an array of string.');
  }
  //Merge all rows in a single output with the correct End of Line string
  var r = rows.join(join || os.EOL || '\n');
  return r;
};