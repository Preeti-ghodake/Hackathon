

function findMissingNumber(nums) {
  const n = nums.length + 1; 
  const sum1 = (n * (n + 1)) / 2;
  const sum2 = nums.reduce((sum, num) => sum + num, 0);
  return sum1 - sum2;
}


var nums = [1, 2, 4, 5];
var missingNumber = findMissingNumber(nums);
console.log(missingNumber); 





