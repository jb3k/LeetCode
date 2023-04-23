/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const visited = {};

  while (right < s.length) {
    const char = s[right];
    //the count of each letter
    visited[char] = visited[char] ? visited[char] + 1 : 1;
    
      // checking to see 
    if (visited[char] > maxCharCount) maxCharCount = visited[char];
    console.log(visited, visited[char], maxCharCount)

      //creating the window size
    if (right - left + 1 - maxCharCount > k) {
      visited[s[left]]--;
      left++;
    }

    right++;
  }

  return right - left;
    
    
};