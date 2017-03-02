// You can check strings against regular expressions with toMatch:

// ref: https://facebook.github.io/jest/docs/asynchronous.html#content


const fetchData = require("./../js/fetchData.js")


test('fetchData with callback', (done) => {
    function callback(data) {
        expect(data).toBe('some data')
        done();
    }

    fetchData(callback);
});



