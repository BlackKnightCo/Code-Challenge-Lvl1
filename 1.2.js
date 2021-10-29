// Compare if two values contain 3 AND add up to 3
function compareEquality(num1, num2) {
  if (num1 === 3 || num2 === 3 && num1 + num2 === 3) { //Function that checks if values contain 3 AND STRICTLY add up to 3
    return true;
  }
  else return false;
  
}

console.log(compareEquality(0, 3));