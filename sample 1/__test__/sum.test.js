const math = require("./../js/sum.js");

describe("Math Opration", () => {
    test("1 + 2 is equal to 3", () => {
        expect(math.sum(1, 2)).not.toBe(3)
    })

    test("2 - 4 is equal to -2", () => {
        expect(math.sub(2, 4)).toBe(-2)
    })

     test("2 * 4 is equal to 8", () => {
        expect(math.mul(2, 4)).toBe(8)
    })
})