const chai = require('chai');
const assert = chai.assert;

const stringCalculator = require('../string-calculator.js');

describe("String Calculator", function() { 

  it("Should return 8", function() {
    const expectedOutput = 8
    const input = "1,2,5"

    assert.strictEqual(stringCalculator(input), expectedOutput);

  });

  it("Should return 0 if empty string", function() {
    const expectedOutput = 0
    const input = ""

    assert.strictEqual(stringCalculator(input), expectedOutput);

  });

  it("Should return 6 if newline character added", function() {
    const expectedOutput = 6
    const input = "1\n,2,3"

    assert.strictEqual(stringCalculator(input), expectedOutput);

  });

  it("Should return 7 if newline character added", function() {
    const expectedOutput = 7
    const input = "1,\n2,4"

    assert.strictEqual(stringCalculator(input), expectedOutput);

  });

  it("Should allow for a custom delimiter", function() {
    const expectedOutput = 8
    const input = "//;\n1;3;4"

    assert.strictEqual(stringCalculator(input), expectedOutput);

  });

  it("Should allow for a custom delimiter", function() {
    const expectedOutput = 6
    const input = "//$\n1$2$3"

    assert.strictEqual(stringCalculator(input), expectedOutput);

  });

  it("Should allow for a custom delimiter", function() {
    const expectedOutput = 13
    const input = "//@\n2@3@8"

    assert.strictEqual(stringCalculator(input), expectedOutput);

  });

});