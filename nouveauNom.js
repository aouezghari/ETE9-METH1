// Refactoring de la fonction compact de Lodash 4.17.21 — licence MIT.
// Source : https://github.com/lodash/lodash/blob/4.17.21/lodash.js

/**
 * Filtre un tableau pour supprimer toutes les valeurs "falsy".
 * Les valeurs "falsy" incluent : false, 0, "", null, undefined, NaN.
 * 
 * @param {Array} array - Le tableau à filtrer.
 * @returns {Array} - Un nouveau tableau contenant uniquement les valeurs "truthy".
 * @throws {TypeError} - Si l'entrée n'est pas un tableau.
 */
function compact(array) {
  // Vérifie si l'entrée est un tableau
  if (!Array.isArray(array)) {
      throw new TypeError("Erreur : L'entrée doit être un tableau.");
  }

  // Filtre les valeurs "falsy" et retourne le tableau filtré
  return array.filter(Boolean);
}

// Tests
try {
  console.log(compact([0, 1, false, 2, "", 3, null, undefined, NaN]));
  // Résultat attendu : [1, 2, 3]

  console.log(compact([]));
  // Résultat attendu : []

  console.log(compact(null));
  // Lève une erreur : Erreur : L'entrée doit être un tableau.

  console.log(compact(undefined));
  // Lève une erreur : Erreur : L'entrée doit être un tableau.

  console.log(compact("not an array"));
  // Lève une erreur : Erreur : L'entrée doit être un tableau.

  console.log(compact([true, false, 0, 1, "hello", "", NaN]));
  // Résultat attendu : [true, 1, "hello"]

  console.log(compact([null, undefined, [], {}, 42]));
  // Résultat attendu : [[], {}, 42]

  console.log(compact([false, 0, NaN, "", null, undefined]));
  // Résultat attendu : []

  console.log(compact([1, "test", {}, [], true]));
  // Résultat attendu : [1, "test", {}, [], true]
} catch (error) {
  console.error(error.message);
}