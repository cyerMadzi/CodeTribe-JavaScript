//Exercise 1 Temperature check

let temperature= 30;

if(temperature < 0) {
    console.log("It's freezing!");
}
else if( temperature >= 0 && temperature <= 15) {
    console.log("It's cold!");
}
else if(temperature >= 16 && temperature <= 25 ){
    console.log("It's mid!");
}
else{
    console.log("It's warm!");
}

switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold!");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mid!");
        break;
    default:
        console.log("It's warm!");
}

//Exercise 2 Divisible Check

let num = 30;
let modulusByThree = num%3;
let modulusByTwo = num%2;

if(modulusByThree === 0 && modulusByTwo === 0) {
    console.log("Divisible by both");
}
else if(modulusByThree != 0 && modulusByTwo === 0){
    console.log("Divisible by 2");
}
else if(modulusByThree === 0 && modulusByTwo != 0){
    console.log("Divisible by 3");
}
else if(modulusByThree != 0 && modulusByTwo != 0){
    console.log("Not divisible by 2 or 3");
}

switch (true) {
    case (modulusByThree === 0 && modulusByTwo === 0):
        console.log("Divisible by both");
        break;
    case (modulusByThree !== 0 && modulusByTwo === 0):
        console.log("Divisible by 2");
        break;
    case (modulusByThree === 0 && modulusByTwo !== 0):
        console.log("Divisible by 3");
        break;
    default:
        console.log("Not divisible by 2 or 3");
}

//Exercise 3 for loops

console.log("Number from 0 to 10 Are as follows:");
for(let i=0; i<=10; i++){
    console.log(i);
}

console.log("All even Numbers from 1-20 are as Follows:");
for(let i=0; i<=20; i+=2){
    console.log(i);
}

console.log("The sum of the numbers from 1-100 are as follows:");
let sum = 0;
for(let i=0; i<=100; i++){
    sum +=i;
}
console.log("The sum of the numbers from 1-100 are as follows:\n" + sum);

const myList = [1, 2, 3, 4, 5];

console.log("The items of the List are as follows:\n ");
for(let i=0; i<myList.length; i++){
    console.log(myList[i]);
}

const numbers = [3, 7, 2, 5, 10, 6];

const HighestNumber = Math.max(...numbers);
console.log("The Highest Number in the List is:\n" + HighestNumber);

// Exercise 4 while loops

console.log("Number from 0 to 10 Are as follows:");
let count = 0; 

while (count <= 10){
    console.log(count)
    count++;
}

console.log("All even Numbers from 1-20 are as Follows:");
let number = 0; 

while (number <= 20){
    console.log(number)
    number+=2;
}

console.log("The sum of the numbers from 1-100 are as follows:"+ sum) ;
let variableNumber = 0;

while (variableNumber <= 100){
    sum += variableNumber;
    variableNumber++;
}

console.log("The multiples of 5 from 0-50 are as follows:");
let z = 0;

while(z <= 50){
    z++;
    if(z % 5 === 0){
        console.log(z);
    };
}

// Exercise 5 do while loops

console.log("Number from 0 to 10 are as follows:");
let k=0;
do{
    console.log(k);
    k++;
}while(k <= 10);

let q = 0;
let v = 1;

do{
    q += v;
    v++;
}while(v <= 100);

console.log(" The sum of all numbers from 1 to 100 are as follows: \n" + q);

let input;

do{
    input = parseInt(prompt("Enter a number between greater than 10 "));   
} while(input <= 10 || isNaN(input)); 

console.log("You entered: " + input);

const correctNum = Math.floor(Math.random() * 10) + 1;
let guess;

do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    
} while (guess !== correctNum);

alert("You guessed it right! The number was " + correctNum);
