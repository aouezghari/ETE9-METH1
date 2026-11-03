import { test } from "node:test";
import assert from "node:assert/strict";
import { parseCommands } from "./robotCommandParser.js";

test("convertit 0X123 en moveForward", () => {
  assert.deepEqual(parseCommands("0X123"), [
    { code: "moveForward" }
  ]);
});

test("convertit OX789 en moveBackward", () => {
  assert.deepEqual(parseCommands("OX789"), [
    { code: "moveBackward" }
  ]);
});

test("convertit OXABC en stop", () => {
  assert.deepEqual(parseCommands("OXABC"), [
    { code: "stop" }
  ]);
});

test("convertit un flux contenant plusieurs commandes", () => {
  assert.deepEqual(parseCommands("0X123OX789OXABC"), [
    { code: "moveForward" },
    { code: "moveBackward" },
    { code: "stop" }
  ]);
});

test("développe une commande répétée dans le flux", () => {
  assert.deepEqual(parseCommands("0X123*3OXABC"), [
    { code: "moveForward" },
    { code: "moveForward" },
    { code: "moveForward" },
    { code: "stop" }
  ]);
});