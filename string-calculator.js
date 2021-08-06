const stringCalculator = function(string) {
  const newArray = string.split(",").map(function(number) {
    return parseInt(number);
})
  const sum = newArray.reduce((a, b) => a + b, 0)
  return sum
}

module.exports = stringCalculator;