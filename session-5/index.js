function getGrade(total){
    let grade;
}
switch(true)

if (total > 90){
    grade = 'A+';

} case (total > 80 && total <=90):
    grade = 'A';
    break;

case (total > 70 && total <=80):
    grade = 'B';
    break;

 
case (total > 60 && total <=70):
    grade = 'C';

else if (total > 50 && total <= 60)
    grade = 'D';

else if (total > 40 && total <= 50)
    grade = 'E';

else if (total > 30 && total <= 40)
    grade = 'F';

else {
    grade = 'Fail';
}

{
    console.log('Your grade is: ' + grade)
}


const x = grade 
let grade;

switch (x) {
    case 90:
    grade = 'A+';
}

function getGrade(total){
    let grade;
  
        switch (true) {
        case (total > 90):
        grade = 'A+';
        break;
  
        case (total > 80):
        grade = 'A';
        break;
  
        case (total > 70):
        grade = 'B';
        break;
  
        case (total > 60):
        grade = 'C';
        break;
  
        case (total > 50):
        grade = 'D';
        break;
  
        case (total > 40):
        grade = 'E';
        break;
  
        case (total > 30):
        grade = 'F';
        break;
  
        case (total < 30):
        grade = 'FAIL';
        break;
  
        default:
        grade = 'Not found';
      }
      return grade
  }
  console.log("Your grade is: " + grade );