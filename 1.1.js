function sumOfMultiples(number) {
    let sum = 0;    for(let i=1; i<number; i++) { // for loop that loops through the number input
        if(i % 3 === 0 || i % 5 === 0){ // function that adds all number inputs that are multiples of 3 and 5
            sum += i;
           
        }
    }    return sum;
}

console.log(sumOfMultiples(1000));