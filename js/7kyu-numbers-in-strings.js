// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

function solve(s) {
   let num = '';
   let arr = [];

   for (let i = 0; i <= s.length; i++) {
      if (typeof (+s[i]) == 'number' && !isNaN(+s[i])) {
         num += s[i];
      }
      else {
         if (num) arr.push(+num);
         num = '';
      }
   }
   return Math.max(...arr);
};