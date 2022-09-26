
//write a function that takes in a non-empty array of distinct intergers and an intergers representing a targetSum.

function twoNumberSum(array, targetSum) {
for(let i = 0; i < array.length -1; i ++){
  const firstNum = array[i];
  for(let j = i + 1; j < array.length; j++){
    const secondNum = array[j];
    if(firstNum + secondNum === targetSum){
      return [firstNum, secondNum];
    }
  }
}
  return [];
}
