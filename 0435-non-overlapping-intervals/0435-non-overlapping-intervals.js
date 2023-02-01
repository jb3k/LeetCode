/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // let count = 0
    // let num = intervals[0]
    // for(let i = 1; i <= intervals.length -1; i++){
    //     let cur = intervals[i]
    //     if(num[1] > cur[0]){
    //     	count++
    //     } else num = cur[1]
    // }
    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0], remove = 0;
    
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < prev[1]) remove++;
        else prev = intervals[i];
    }
    return remove;

    
};