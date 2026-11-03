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