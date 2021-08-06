const stringCalculator = function(string) {
  if(!string){
    return 0
  };
  let negativeNumbers = []
  let dilemeter = ",";
  let newString = string;
  if(string.substring(0,2) === "//"){
    dilemeter = string.split("\n")[0].slice(2)
    newString = string.split("\n")[1]
  }
  const newArray = newString.split(dilemeter).map(function(number) {
    if(number < 0){
      negativeNumbers.push(number)
    }
    return parseInt(number);
})
  const sum = newArray.reduce((a, b) => a + b, 0)
  if(negativeNumbers.length > 0){
    return `Negatives not allowed. Negative Numbers: ${negativeNumbers}`
  }
  return sum
}

module.exports = stringCalculator;