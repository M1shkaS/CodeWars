// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending " - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
   return (isAscending(array) ? 'yes, ascending' : isDescending(array) ? 'yes, descending' : 'no');
}

function isAscending(arr) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) return false;
   }
   return true;
}

function isDescending(arr) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) return false;
   }
   return true;
}
