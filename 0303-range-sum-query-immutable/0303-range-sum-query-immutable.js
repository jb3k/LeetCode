/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
};

NumArray.prototype.sumRange = function(left, right) {
    let sum = 0;
    for(let i = left; i <= right; i++) sum += this.nums[i]
    return sum
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */