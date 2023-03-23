/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const leftNums = nums.slice(0, mid);
    const rightNums = nums.slice(mid);

    return merge(sortArray(leftNums), sortArray(rightNums));
};

function merge(leftNums, rightNums) {
    const sortedResult = [];
    let i = 0;
    let j = 0;
    while (i < leftNums.length && j < rightNums.length) {
        if (leftNums[i] <= rightNums[j]) {
            sortedResult.push(leftNums[i++]);
        } else {
            sortedResult.push(rightNums[j++]);
        }
    }
    return [...sortedResult, ...leftNums.slice(i), ...rightNums.slice(j)];
}