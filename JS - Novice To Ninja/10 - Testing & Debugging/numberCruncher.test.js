// DEMONTRATION OF TEST DRIVEN DEVELOPMENT
'use strict';

function factorsOf(x) { 
    if(Number.isNaN(Number(x))) {
        throw new RangeError("Argument Error: Value must be an integer");
    }

    if (x < 0) {
        throw new RangeError("Argument Error: Number must be positive");
    }

    if(!Number.isInteger(x)) {
        throw new RangeError("Argument Error: Number must be an integer");
    }   

    let factors = [];
    for (let i = 1 ; i <= x / 2 ; i++) {
        if(x % i === 0) {
            factors.push(i);
        }
    }
    factors.push(x);
    return factors;
}


function isPrime(x) {
    try {
        return factorsOf(x).length === 2;
    } catch(rangeError) {
        return false;
    }
}

// toEqual is used because we are comparing an array

test("factors of 12", () => {
    expect(factorsOf(12)).toEqual([1, 2, 3, 4, 6, 12]);
});


test("factors of 36", () => {
    expect(factorsOf(36)).toEqual([1, 2, 3, 4, 6, 9, 12, 18, 36]);
})

test("2 is prime", () => {
    expect(isPrime(2)).toBe(true);
});

test("10 is prime", () => {
    expect(isPrime(10)).not.toBe(true);
});

test("should throw an exception for non-numerical data", () => {
    expect(() => factorsOf("twelve")).toThrow();
});

test("should throw an exception for negative numbers", () => {
    expect(() => factorsOf(-12)).toThrow();
});

test("should throw an exception for non-integer values", () => {
    expect(() => factorsOf(3.1415)).toThrow();
});


test("non-numerical data returns not prime", () => {
    expect(isPrime("twelve")).toBe(false);
});

test("negative numbers returns not prime", () => {
    expect(isPrime(-12)).toBe(false);
});

test("non-integer values return not prime", () => {
    expect(isPrime(3.1415)).toBe(false);
});
