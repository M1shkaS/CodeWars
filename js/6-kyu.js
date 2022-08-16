// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
   const newStringArr = [];
   let index = 0;
   if (str.length == 0) return [];
   while (true) {
      if (index >= str.length) break;
      newStringArr.push(str.substr(index, 2));
      index += 2;
   }

   if (newStringArr[newStringArr.length - 1].length % 2 != 0) {
      newStringArr[newStringArr.length - 1] += '_'
   }
   return newStringArr;
}

console.log(solution("abcdef"));
console.log(solution("abc"));
console.log(solution(""));