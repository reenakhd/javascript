const readline =require("readline-sync");
console.log('Welcome to Calculator');
console.log('----------------------');
//console.log('Please enter operator you would like to perform +,-,/,*');
//const operator = readline.prompt();
console.log('How many numbers would you like to add');
const number = readline.prompt();
let numbers_array = Array();
var total=0;
for (let i=0;i<number;i++)
{ 
    console.log('Please enter number:');
    const response = parseInt(readline.prompt());
    numbers_array.push(response)
    total=total + numbers_array[i];

}

console.log(numbers_array);
console.log(total);

/*console.log('Please enter second number:');
const response2 = readline.prompt();
var answer;
switch(operator){
case '+': 
answer = response + response2;
console.log("The answer is " +answer);
break;
case '*': 
answer=response*response2;
console.log("The answer is " +answer);
break;
case '/': 
answer=response/response2;
console.log("The answer is " +answer);
break;
case '-': 
answer=response-response2;
console.log("The answer is " +answer);
break;
default:
   console.log("Please enter right operator") 
}*/



