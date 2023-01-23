/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // merged to nums1, has to be least to greatest, m and n are the lengths of the arr
    
    
    // edge case - if n || m is 0; then just return the side thats not 0
    // keep a temporary var to hold the number thats getting replaced
    // two pointer... l-r, while l <= sum of m and n
        // if nums[l] < nums[r]...  || nums[l] === nums[r] increment l
        // else, save the number in temp var, then set nums[l] = nums[r] and increment r           and left
            //then check if the value of the temp var, is less than the new num on right
            // if temp < nums[r] then set nums[l] to temp and increment l
            // else nums[l] = nums[r], incremement both
        
//     let [l, r] = [m -1 , n -1]
//     let count = nums1.length - 1
    
//     while(count > 0){
        
//         if(nums1[l] < nums2[r]){
//             nums1[count] = nums2[r]
//             r--
//             count--
//         } else {
//             nums1[count] = nums1[l]
//             l--
//             count--
//         }
        
//     }
    
//     while (r > 0){
//         nums1[count] = nums2[r]
//         [r, count ] = []
        
//     }
    
    
//     return nums1
    
      let idx1 = m - 1, idx2 = n - 1, idx3 = m + n - 1;
  while (idx2 >= 0) {
    nums1[idx3--] = nums1[idx1] > nums2[idx2]
      ? nums1[idx1--]
      : nums2[idx2--];
  }
    
};