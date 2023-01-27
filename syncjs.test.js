import * as t from "https://deno.land/std/testing/asserts.ts";
import syncjs from "./syncjs.js";

Deno.test("simple", () => {
  t.assertEquals(syncjs("f();"), "await f();");
});
Deno.test("await", () => {
  t.assertEquals(syncjs("await f();"), "await f();");
});
Deno.test("in exp", () => {
  t.assertEquals(syncjs("const n = f();"), "const n = await f();");
});
Deno.test("in func", () => {
  t.assertEquals(syncjs("f(f());"), "await f(await f());");
});
Deno.test("promise, no await", () => {
  t.assertEquals(syncjs("promise(f());"), "f();");
});

/*
before

{
  "type": "Program",
  "start": 0,
  "end": 4,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 4,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 3,
        "callee": {
          "type": "Identifier",
          "start": 0,
          "end": 1,
          "name": "f"
        },
        "arguments": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
after // CallExpression を AwaitExpression で囲む
{
  "type": "Program",
  "start": 0,
  "end": 10,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 10,
      "expression": {
        "type": "AwaitExpression",
        "start": 0,
        "end": 9,
        "argument": {
          "type": "CallExpression",
          "start": 6,
          "end": 9,
          "callee": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "f"
          },
          "arguments": [],
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
*/
