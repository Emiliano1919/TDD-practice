const capitalize = require('../code/capitalize');

test('capitalize bird to Bird', () => {
    expect(capitalize('bird')).toBe('Bird');
});

test('capitalize a to A', () => {
    expect(capitalize('a')).toBe('A');
});

test('capitalize T to T', () => {
    expect(capitalize('T')).toBe('T');
});

test('capitalize TEST to TEST', () => {
    expect(capitalize('TEST')).toBe('TEST');
});

