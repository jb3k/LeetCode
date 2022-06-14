/* 
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

------------------------------------------------------

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

*/


var findMedianSortedArrays = function (nums1, nums2) {

    let arr = merge(nums1, nums2)

    if (arr.length % 2 === 0) {
        let mid = Math.floor(arr.length / 2)
        let value1 = arr[mid - 1]
        let value2 = arr[(mid)]
        return (value1 + value2) / 2

    } else {
        let mid = Math.floor(arr.length / 2)
        return arr[mid]
    }

};


function merge(nums1, nums2) {

    let arr = []

    // Point to the first value of each array
    let indexA = 0
    let indexB = 0
    // While there are still values in each array...
    while (indexA < nums1.length || indexB < nums2.length) {
        let ele1 = nums1[indexA];
        let ele2 = nums2[indexB]

        // Compare the first values of each array
        if (ele1 > ele2) {
            arr.push(ele2)
            indexB++
        } else if (ele1 < ele2) {
            arr.push(ele1)
            indexA++
        } else if (indexA === nums1.length) {
            //try to concat instead... then break instead of increment

            arr.push(ele2)
            indexB++
        } else if (indexB === nums2.length) {
            //try to concat instead... then break instead of increment

            arr.push(ele1);
            indexA++
        }
    }
    return arr
}
