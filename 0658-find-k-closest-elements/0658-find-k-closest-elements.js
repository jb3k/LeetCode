/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    
    // left and right pointers
    
  let l = 0;
  let r = arr.length - 1;
  while (r - l >= k) {
    // a-x <= b-x (Comparison Law at the Question)
    if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) r--;
    else l++;
  }
  return arr.slice(l, r + 1);
    
};