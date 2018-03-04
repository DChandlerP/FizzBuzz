for (let number = 1; number < 101; number++){

    if(divisibleBy3(number) && divisibleBy5(number)){
        console.log("FizzBuzz");
    }
    else if (divisibleBy3(number)){console.log("Fizz")}
    else if (divisibleBy5(number)){console.log("Buzz")}
    else {console.log(number)}
}

function divisibleBy3(number) {
    return number %3 === 0;
}

function divisibleBy5(number) {
    return number % 5 ===0;
}