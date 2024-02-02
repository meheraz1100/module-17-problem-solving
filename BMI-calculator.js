/* 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const height = prompt("Enter Your Height in metre: ");
const weight = prompt("Enter Your height in KG: ");

const BMI = weight / height**2

const result = BMI.toFixed(2);

console.log(result)

if(result < 18.5){
    console.log('You are under weight');
}
else if(result >= 18.5 && result <= 24.9){
    console.log('You are normal');
}
else if(result >= 25 && result <= 29.9){
    console.log('You Are Overweight');
}
else{
    console.log('you are obese');
}