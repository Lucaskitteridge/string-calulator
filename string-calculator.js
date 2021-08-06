const stringCalculator = function(string) {
  if(!string){
    return 0
  }
  let dilemeter = ","
  let newString = string
  if(string.substring(0,2) === "//"){
    dilemeter = string.split("\n")[0].slice(2)
    newString = string.split("\n")[1]
  }
  const newArray = newString.split(dilemeter).map(function(number) {
    return parseInt(number);
})
  const sum = newArray.reduce((a, b) => a + b, 0)
  return sum
}

module.exports = stringCalculator;