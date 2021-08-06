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

});