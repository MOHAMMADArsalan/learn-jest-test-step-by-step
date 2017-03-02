// In this code, expect(2 + 2) returns an "expectation" object.
// You typically won't do much with these expectation objects except call matchers on them. In this code, .toBe(4) is the matcher.

// NOTE: 
// toBe uses === to test exact equality.
// You can also use toEqual insteadOf toBe

// ref: https://facebook.github.io/jest/docs/using-matchers.html#content;


// This test will be passed 
test(" 2 + 2 is equal to 4", () => {
    expect(2 + 2).toBe(4)
})

// This test will not be passed bcoz jest use === equal to test exact equality;
// "4" in string is not  equal to 4 in number

test(" 2 + 2 is equal to 4", () => {
    expect(2 + 2).toBe("4")
})