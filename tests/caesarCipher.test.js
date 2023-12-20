const caesarCipher = require("../code/caesarCipher");

test("Caesar cipher test 1", () => {
  expect(caesarCipher("Hello World?", 0)).toBe("Hello World?");
});

test("Caesar cipher test 2", () => {
  expect(caesarCipher("what a wonderful day", 3)).toBe("zkdw d zrqghuixo gdb");
});

test("Caesar cipher test 3", () => {
  expect(caesarCipher("i really need to sleep early tonight!", 6)).toBe(
    "o xkgrre tkkj zu yrkkv kgxre zutomnz!"
    );
});

test("Caesar cipher test 4", () => {
  expect(caesarCipher("going to work", 11)).toBe("rztyr ez hzcv");
});