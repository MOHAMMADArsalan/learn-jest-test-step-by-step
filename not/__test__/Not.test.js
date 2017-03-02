// You can also test for the opposite of a matcher: not.toBe and not.toEqual 

// ref: https://facebook.github.io/jest/docs/using-matchers.html#content;


// This test will be passed 
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
})

test("User Email should be verified", () => {
    let user = {
        name: "MOHAMMAD Arsalan",
        age: 25,
        verified: true,
        email: 'arsalan.subhaan@gmail.com'
    }
    expect(user).not.toEqual({
        name: "MOHAMMAD Arsalan",
        age: 25,
        verified: false,
        email: 'arsalan.subhaan@gmail.com'
    })
})