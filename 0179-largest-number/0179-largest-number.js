/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    
    nums.sort((a,b)=>{
        let sa = a.toString()
        let sb = b.toString()
        return parseInt(sa + sb) > parseInt(sb + sa) ? -1 : 1
    })
    console.log(nums)
    if(nums[0] === 0) return '0'
    
    return nums.join('')
    
    
};