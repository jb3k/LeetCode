/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums.sort((a,b)=>a-b);
    if(k===1)
    {
        return 0;
    }
    var n = nums.length;
    var res = Infinity;
    for(var i = 0; i<= n-k; i++)
    {
        res = Math.min(res, nums[i+k-1]-nums[i]);
    }
    return res;
};