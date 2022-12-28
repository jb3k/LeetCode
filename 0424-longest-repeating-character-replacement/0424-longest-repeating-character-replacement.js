/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    //two pointer, l,r = 0, 0
    // counter obj, length var
    
    // while r < s.length 
    // obj[s[r]] === null ? obj[s[r]] = 1 : obj[s[r]] + 1
    // if the counter of a letter is greater than length var
        //set that to new length var
    // if the window of r - l + 1 (+1 includes the last character) - the length var is greater than k, it means that it's not a valid window
        //decrement the count of the left, and move the left pointer up (to make it a valid window)
    
    // r++

    //return the distance between r and l
    
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const visited = {};

  while (right < s.length) {
    const char = s[right];
    visited[char] = visited[char] ? visited[char] + 1 : 1;

    if (visited[char] > maxCharCount) maxCharCount = visited[char];

    if (right - left + 1 - maxCharCount > k) {
      visited[s[left]]--;
      left++;
    }

    right++;
  }

  return right - left;
};