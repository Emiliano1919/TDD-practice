const analyzeArray  = require('../code/analyzeArray');

test("Array analysis test 1", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
});

test("Array analysis test 2", () => {
    expect(analyzeArray([2, 2, 2, 2, 2, 2])).toEqual({
      average: 2,
      min: 2,
      max: 2,
      length: 6,
    });
});

test("Array analysis test 3", () => {
    expect(analyzeArray([0])).toEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 1,
    });
});

test("Array analysis test 4", () => {
    expect(analyzeArray([4,2])).toEqual({
      average: 3,
      min: 2,
      max: 4,
      length: 2,
    });
});