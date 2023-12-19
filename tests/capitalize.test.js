const capitalize = require('../code/capitalize');
test('capitalize bird to Bird', () => {
    expect(capitalize('bird')).toBe(3);
});

test('capitalize a to A', () => {
    expect(capitalize('a')).toBe(3);
});

test('capitalize T to T', () => {
    expect(capitalize('T')).toBe(3);
});

test('capitalize TEST to TEST', () => {
    expect(capitalize('Test')).toBe(3);
});

