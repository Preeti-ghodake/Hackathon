function roman(num) {
  const romanNumber = {
    
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    3: 'III',
    2: 'II',
    1: 'I'
  };

  let result = '';
  for (let key in romanNumber) {
    while (num >= key) {
      result += romanNumber[key];
      num -= key;
    }
  }

  return result;
}

var num = 3;
var romanNum = roman(num);
console.log(romanNum);  





