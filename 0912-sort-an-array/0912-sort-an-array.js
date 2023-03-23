/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
    let merge = (arr, l, m, r) => {
        let leftArr = arr.slice(l, m + 1)
        let rightArr = arr.slice(m + 1, r+ 1)
        
        let cur = l
        let left = 0
        let right = 0
        
        while(left < leftArr.length && right < rightArr.length){
            if(leftArr[left] <= rightArr[right]){
                arr[cur] = leftArr[left]
                left++
            } else {
                arr[cur] = rightArr[right]
                right++
            }
            cur++
        }
        while(left < leftArr.length){
            arr[cur] = leftArr[left]
            left++
            cur++
        }
        while(right < rightArr.length){
            arr[cur] = rightArr[right]
            right++
            cur++
        }
    }
    
    
    
    let mergeSort = (arr, l, r) => {
        // basecase
        if(l === r) return arr
        
        let m = Math.floor((l + r) / 2)
        mergeSort(arr, l, m)
        mergeSort(arr, m + 1, r)
        merge(arr, l, m, r)
        return arr
        
    }
    
    return mergeSort(nums, 0, nums.length -1)
    
};