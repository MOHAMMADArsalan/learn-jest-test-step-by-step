// toEqual recursively checks every field of an object or array.

// ref: https://facebook.github.io/jest/docs/using-matchers.html#content;

const checkEmail = require("./../js/checkEmail.js")

// This test will be passed 
test("user should have username,email and password", () => {
    let user = {
        name: "MOHAMMAD Arsalan",
        email: "arsalan.subhaan@gmail.com",
        password: 12345
    }
    expect(user).toEqual({
        name: "MOHAMMAD Arsalan",
        email: "arsalan.subhaan@gmail.com",
        password: 12345
    })
})

test('check Email Pattren is Valid', () => {
    expect(checkEmail('arsalan.subhaan@gmail.com')).toBe(true)
})