// If you want to test that a particular function throws an error when it's called, use toThrow.

// ref: https://facebook.github.io/jest/docs/using-matchers.html#content;

function callWhenCountIsGreaterTenThrowError() {
    throw new Error("Loop is greater Than 10")
}
test('If get 10 then throw Error', () => {
    for (let i = 0; i < 100; i++) {
        if (i > 10) {
            break;
        }
    }
    expect(callWhenCountIsGreaterTenThrowError).toThrow();
    expect(callWhenCountIsGreaterTenThrowError).toThrow(Error);

    //  Expected the function to throw an error matching: "you are using the wrong JDK"
    // Instead, it threw  Loop is greater Than 10;
    // Test will Fail
    expect(callWhenCountIsGreaterTenThrowError).toThrow('you are using the wrong JDK'); 

})