/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    let res = nums[0]
    let l = 0
    let r = nums.length - 1

    while(l <= r){
        if(nums[l] < nums[r]){
            res = Math.min(res, nums[l])
            break
        }

        let mid = Math.floor((l + r) / 2)
        res = Math.min(res, nums[mid])
        if(nums[mid] >= nums[l]){
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return res

};