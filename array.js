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
