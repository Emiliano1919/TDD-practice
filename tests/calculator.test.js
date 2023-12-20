const calculator = require('../code/calculator');

test('add 1 to 2 get 3', () => {
    expect(calculator.add(1,2)).toBe(3);
});

test('subtract 1 by 21 get -20', () => {
    expect(calculator.subtract(1,21)).toBe(-20);
});

test('divide 200 by 200 get 1', () => {
    expect(calculator.divide(200,200)).toBe(1);
});

test('multiply 123 by 10 get 1230', () => {
    expect(calculator.multiply(123,10)).toBe(1230);
});