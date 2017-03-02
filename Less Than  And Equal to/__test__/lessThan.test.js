// Most ways of comparing numbers have matcher equivalents.

// ref: https://facebook.github.io/jest/docs/using-matchers.html#content;


// This test will be passed 
test('2 + 2 should be less than 5', () => {
  expect(2 + 2).toBeLessThan(5)
    expect(2 + 2).toBeLessThanOrEqual(4.5)

})

test('current Number is less Than current Number + 1', () => {
  for (let a = 10; a > 1; a--) {
    expect(a).toBeLessThan(a + 1);
  }
})