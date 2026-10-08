// Refactoring de la fonction compact de Lodash 4.17.21 — licence MIT.
// Source : https://github.com/lodash/lodash/blob/4.17.21/lodash.js

function compact(array) {
    if (!Array.isArray(array)) {
        console.error("Erreur : L'entrée doit être un tableau.");
        return [];
    }
    return array.filter(Boolean);
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

  console.log(compact("not an array")); // Affiche une erreur et retourne []

  console.log(compact([true, false, 0, 1, "hello", "", NaN])); // [true, 1, "hello"]
console.log(compact([null, undefined, [], {}, 42])); // [[], {}, 42]
console.log(compact("not an array")); // Erreur : L'entrée doit être un tableau.
console.log(compact([false, 0, NaN, "", null, undefined])); // []
console.log(compact([1, "test", {}, [], true])); // [1, "test", {}, [], true]