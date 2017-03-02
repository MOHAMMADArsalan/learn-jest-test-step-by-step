// In tests you sometimes need to distinguish between undefined, null, and false,
// but you sometimes do not want to treat these differently. 
// Jest contains helpers that let you be explicit about what you want.

// ref: https://facebook.github.io/jest/docs/using-matchers.html#content;


test('null', () => {
    let n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    let z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});
