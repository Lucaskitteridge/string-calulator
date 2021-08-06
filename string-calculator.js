const stringCalculator = function(string) {
  if(!string){
    return 0
  }
  const newArray = string.split(",").map(function(number) {
    return parseInt(number);
})
  const sum = newArray.reduce((a, b) => a + b, 0)
  return sum
}

module.exports = stringCalculator;