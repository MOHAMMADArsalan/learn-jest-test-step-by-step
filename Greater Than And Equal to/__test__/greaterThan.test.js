//Most ways of comparing numbers have matcher equivalents.

// ref: https://facebook.github.io/jest/docs/using-matchers.html#content;


// This test will be passed 
test('2 + 2 should be greated than 3', () => { 
    expect(2 + 2).toBeGreaterThan(3)
    expect(2 + 2).toBeGreaterThanOrEqual(3.5)
})

test('adding positive numbers is greater Than zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).toBeGreaterThan(0);
    }
  }
})