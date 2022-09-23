const grades = [100,66,88,45,98,77,89];
grades.sort((a,b) => b - a);
console.log(grades)
// 100, 98, 89, 88, 77, 66, 45

const grades = [100,66,88,45,98,77,89];
grades.sort((a,b) => a - b);
console.log(grades);
// 45, 66, 77, 88, 89, 98, 100

const score = [50,60,70,80,90,100];

const logScore = (score) => console.log('score over 65', score);

score.forEach((element => {
  if(element > 65) {
    logScore(element)
  }
}))
//output 
score over 65 70
score over 65 80
score over 65 90
score over 65 100


const students = [
  {name: 'John', grade: 75},
  {name: 'Jane', grade: 93},
  {name: 'Samantha', grade: 90},
  {name: 'Micheal', grade: 94},
];
students.sort((a,b) => b.grade - a.grade);
console.log(students);

students.sort((a,b) => a.grade - b.grade);
console.log(students)

const overNinety = students.find((students) => students.grade > 90);
console.log(overNinety)


// includes method
const careers = ['teacher', ' doctor', 'engineer', 'nurse', 'scientist'];
const nurseIncluded = careers.includes('nurse')
console.log(nurseIncluded)
// true
