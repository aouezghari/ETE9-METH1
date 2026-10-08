// Refactoring de la fonction compact de Lodash 4.17.21 — licence MIT.
// Source : https://github.com/lodash/lodash/blob/4.17.21/lodash.js

function compact(array) {
    if (array == null) {
      return [];
    }
  
    const result = [];
    const length = array.length;
  
    for (let index = 0; index < length; index++) {
      const value = array[index];
  
      if (value) {
        result.push(value);
      }
    }
  
    return result;
  }
  
  // Tests
  console.log(compact([0, 1, false, 2, "", 3, null, undefined, NaN]));
  // Résultat attendu : [1, 2, 3]
  
  console.log(compact([]));
  // Résultat attendu : []
  
  console.log(compact(null));
  // Résultat attendu : []
  
  console.log(compact(undefined));
  // Résultat attendu : []