/*

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = prompt('Enter your age : ');

if(age >= 3 && age <= 10){
    console.log('You win a free ticket!');
}
else if(age >= 11 && age <= 18){
    console.log('you win 50% discount!');
}
else if(age >= 60){
    console.log('You win 60% disconut!')
}
else if(age == ''){
    console.log('Please Enter you age!!!!');
}
else{
    console.log('Regular ticket fare 800 tk');
}