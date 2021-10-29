function compareOrSum(num1, num2){
	if (num1 === 65 || num2 === 65 || num1 + num2 === 65){ //Function that checks if the number input contains 65 OR STRICTLY adds up to 65
	return true;
	}
	else return false;
}

console.log(compareOrSum(0,65));