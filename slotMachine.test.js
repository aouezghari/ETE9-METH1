import { test } from "node:test";
import assert from "node:assert/strict";
import { slotMachine } from "./slotMachine.js";

test("double la mise si les deux premiers symboles sont identiques", () => {
  assert.equal(slotMachine(5, ["+", "+", "%"]), 10);
});

test("retourne zéro si les symboles sont différents", () => {
  assert.equal(slotMachine(5, ["+", "%", "$"]), 0);
});

test("double la mise si les deux derniers symboles sont identiques", () => {
  assert.equal(slotMachine(5, ["%", "+", "+"]), 10);
});
test("multiplie la mise par cinq si les trois symboles sont identiques", () => {
  assert.equal(slotMachine(10, ["+", "+", "+"]), 50);
});
test("multiplie la mise par vingt pour le jackpot", () => {
    assert.equal(slotMachine(50, ["$", "$", "$"]), 1000);
  });