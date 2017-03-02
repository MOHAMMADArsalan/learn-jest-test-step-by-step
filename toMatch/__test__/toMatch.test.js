// You can check strings against regular expressions with toMatch:

// ref: https://facebook.github.io/jest/docs/using-matchers.html#content;


// This test will not be passed 

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
})

test("Username should not contain special characters", () => {
    let Username = '!arsalan123';
    expect(Username).not.toMatch(/!/)
})