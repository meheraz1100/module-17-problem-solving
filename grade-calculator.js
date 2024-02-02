/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const studetsScore = prompt("Enter Your score : ");

if(studetsScore >= 90 && studetsScore <= 100){
    console.log('Your Grade is = A');
}
else if(studetsScore >= 80 && studetsScore <= 89){
    console.log('Your grade is = B');
}
else if(studetsScore >= 70 && studetsScore <= 79){
    console.log('Your grade is = C');
}
else if(studetsScore >= 60 && studetsScore <= 69){
    console.log('Your grade is = D');
}
else if(studetsScore >= 0 && studetsScore <= 59){
    console.log('Your grade is = F');
}
else{
    console.log('An error occured');
}