// Complete the solution so that it returns the number of times the search_text is found within the full_text.

// Usage example:

// solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
// solution('aaabbbcccc', 'bbb') # should return 1

function solution(fullText, searchText) {
   let arr = [],
      idx = fullText.indexOf(searchText);

   while (idx !== -1) {
      arr.push(idx);
      idx = fullText.indexOf(searchText, idx + 1);
   }

   return arr.length;
}