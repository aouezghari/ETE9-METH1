import { test } from "node:test";
import assert from "node:assert/strict";
import { parseCommands } from "./robotCommandParser.js";

test("convertit 0X123 en moveForward", () => {
  assert.deepEqual(parseCommands("0X123"), ["moveForward"]);
});

test("convertit OX789 en moveBackward", () => {
  assert.deepEqual(parseCommands("OX789"), ["moveBackward"]);
});
test("convertit OXABC en stop", () => {
    assert.deepEqual(parseCommands("OXABC"), ["stop"]);
});
test("convertit un flux contenant plusieurs commandes", () => {
    assert.deepEqual(
      parseCommands("0X123OX789OXABC"),
      ["moveForward", "moveBackward", "stop"]
    );
});