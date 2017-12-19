'use strict';

function cleanLeadingSlash(somePath) {
  var outText = somePath.slice(1, somePath.length);
  return outText;
}

module.exports = { cleanLeadingSlash };
