// const { divide, multiply, rest, sumar } = require('./index.js')

const sumar = (a, b) => {
    return parseFloat(a) + parseFloat(b);
};
const multiply = (a, b) => {
    return parseFloat(a) * parseFloat(b);
};
const divide = (a, b) => {
    return parseFloat(a) / parseFloat(b);
};
const rest = (a, b) => {
    return parseFloat(a) - parseFloat(b);
};

describe("math functions", () => {
    test("sumar should return the sum of two numbers", () => {
        const result = sumar(5, 10);
        expect(result).toBe(15);
    });
    test("multiply should return the product of two numbers", () => {
        const result = multiply(5, 10);
        expect(result).toBe(50);
    });
    test("divide should return the division of two numbers", () => {
        const result = divide(50, 10);
        expect(result).toBe(5);
    });
    test("rest should return the difference of two numbers", () => {
        const result = rest(10, 5);
        expect(result).toBe(5);
    });
})