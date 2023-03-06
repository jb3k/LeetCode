/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
    // let res = []
    // loop thru nums1
        // find the index of the character in nums 2 from nums1
        // while idx2 < nums2.length
            // if a num is greater than the cur num then push into res
            // increment idx
        // 
    
    let res = []
    for(let i = 0; i < nums1.length; i++){
        let num = nums1[i];
        let index = nums2.indexOf(num)
        while(index < nums2.length){
            if(nums2[index] > num){
                res.push(nums2[index])
                break
            }
            index++
        }
            if(res.length - 1  !== i){
                res.push(-1)
            }
            
    }
    return res
    
    
};