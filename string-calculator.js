const stringCalculator = function (string) {
  if (!string) {
    return 0;
  }
  let negativeNumbers = [];
  let dilemeter = ",";
  let newString = string;

  //if a custom delimeter exists
  if (string.substring(0, 2) === "//") {
    dilemeter = string.split("\n")[0].slice(2).split(",");
    newString = string.split("\n")[1];
  }

  const newArray = newString.split(dilemeter).map(function (number) {
    //if number is a negative then push it to array
    if (number < 0) {
      negativeNumbers.push(number);
    }

    //if value is over then 1000 return it to 0
    if (number > 1000) {
      return 0;
    }

    return parseInt(number);
  });

  //Using a reducer to add the numbers together
  const sum = newArray.reduce((a, b) => a + b, 0);

  //If negatives exist then this will trigger
  if (negativeNumbers.length > 0) {
    return `Negatives not allowed. Negative Numbers: ${negativeNumbers}`;
  }

  return sum;
};

module.exports = stringCalculator;
