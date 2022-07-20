



/* Q-1) Accept name from user and print a message “Hello <<User>>” on the console.  */
let name= prompt('Enter user name');
console.log('Hello', name)








 /* /* Q-2) Accept a number from user and find if it is even or odd. Print message on console
accordingly  */

let number = prompt('Enter a number:');

if (number % 2 == 0) {
    console.log('The number is even');
}

else {
    console.log('The number is odd');
}








/* Q-3) Accept a number from user. Find if the number is a prime number or not. Print message on
console accordingly.  */


let numb = parseInt (prompt('Enter a number:'));
let isprime= true;

if (numb === 1) {
    console.log('1 is not a prime number');
}

else if (numb > 1) {

    for (let i = 2; i < numb; i++) {
        if (numb % i == 0) {
            isprime = false;
            break;
        }
    }

    if (isprime) {
        console.log(numb, 'is a prime number');
    } else {
        console.log(numb, 'is a not prime number');
    }
}







/* Q-4) Accept a number from user and print its table (Maths table) on the console */


let num = parseInt(prompt('Enter a number: '));
for(let i = 1; i <= 10; i++) {
    const result = i * num;
    console.log(num, '*', i ,'=', result);
}
