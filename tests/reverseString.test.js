const reverseString = require('../code/reverseString');

test('reverse test to tset', () => {
    expect(reverseString('test')).toBe('tset');
});

test('reverse a to a', () => {
    expect(reverseString('a')).toBe('a');
});

test('reverse AB to BA', () => {
    expect(reverseString('AB')).toBe('BA');
});

test('reverse uNu to uNu', () => {
    expect(reverseString('uNu')).toBe('uNu');
});