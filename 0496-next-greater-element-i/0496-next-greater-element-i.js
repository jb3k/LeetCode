/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

//     let res = []
//     for(let i = 0; i < nums1.length; i++){
//         let num = nums1[i];
//         let index = nums2.indexOf(num)
//         while(index < nums2.length){
//             if(nums2[index] > num){
//                 res.push(nums2[index])
//                 break
//             }
//             index++
//         }
//         if(res.length - 1  !== i){
//             res.push(-1)
//         }
            
//     }
//     return res
    
  const map = {};
  const stack = [];
  nums2.forEach(n => {
    while (stack.length > 0 && stack[stack.length - 1] < n) {
      map[stack.pop()] = n;
    }
    stack.push(n);
  });
  return nums1.map(n => map[n] || -1);
    
    
    
    
    
};