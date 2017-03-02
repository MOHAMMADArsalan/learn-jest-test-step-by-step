// For floating point equality, use toBeCloseTo instead of toEqual,
// because you don't want a test to depend on a tiny rounding error

// ref: https://facebook.github.io/jest/docs/using-matchers.html#content;



test('adding floating point numbers', () => {
    let value = 0.1 + 0.2; // ans is 0.30000000000000004;
    expect(value).not.toBe(0.3);    // It isn't! Because rounding error
    expect(value).toBeCloseTo(0.3); // This works.
})