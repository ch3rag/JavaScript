function squareRoot(x) {
    'use strict';
    if (x < 0) {
        throw new RangeError("Can't find the square root of negative numbers");
    }
    return Math.sqrt(x);
}

test("Square root of 4 is 2", () => {
    expect(squareRoot(4)).toBe(2);
});

test("Square root of 49 is 7", () => {
    expect(squareRoot(49)).toBe(7);
});

test("Square root of 64 is 8", () => {
    expect(squareRoot(64)).toBe(8);
});


// TEST IT USING
// jest -c {}
