// Extrait de Lodash 4.17.21, fonction compact — licence MIT.
// Source : https://github.com/lodash/lodash/blob/4.17.21/lodash.js

function compact(array) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];
  
    while (++index < length) {
      var value = array[index];
      if (value) {
        result[resIndex++] = value;
      }
    }
  
    return result;
  }