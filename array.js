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


//challenge problems

const careers = ['teacher', ' doctor', 'engineer', 'nurse', 'scientist'];
const nurseIncluded = careers.includes('nurse')
console.log(nurseIncluded)

const states = ['California', 'New York', 'New Jersey', 'Alaska'];
const someStates = states.some((states) =>states.startsWith('New'));
console.log(someStates)

const everyState = states.every((states) => states.startsWith('New'));
console.log(everyState)

const bowlingScores = [154, 204, 300, 184, 286]
const bowlingIncluded = bowlingScores.includes(300);
console.log(bowlingIncluded);

const someBowling = bowlingScores.some((bowlingScores) => bowlingScores < 150);
console.log(someBowling)

const evenBowling = bowlingScores.every((bowlingScores) => bowlingScores % 2 == 0);
console.log(evenBowling)


// push, pop, shift, unshift

const foods = [
  {food: 'rasberries', type: 'fruit'},
  {food: 'orange', type: 'fruit'},
  {food: 'broccoli', type: 'vegatable'}
];

const blackBeans = {food: 'black beans', type: 'legume'};
const chiaSeeds = {food: 'chia seeds', type: 'seed'};

foods.pop()
console.log(foods)
foods.push(blackBeans);
console.log(foods)
foods.unshift(chiaSeeds)
console.log(foods)
foods.shift()
console.log(foods)

//
function smallestValue(){
	var array = [4, 9, -23, 14, -6, 20, 33, -8, 1, -52];
	var smallest = array[0];
	//your code here
	for(var x = 0; x < array.length; x++){
	    if(array[x]< smallest){
	        smallest = array[x]
	    }
	}
	return smallest; 
}
console.log(smallestValue())
