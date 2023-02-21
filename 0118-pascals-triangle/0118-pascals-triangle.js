/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(num) {
    const res = [];
    if (num >= 2) {
      res.push([1]);
      res.push([1, 1]);
    } else {
      res.push([1]);
    }
  
    // will  only run if we had number greater than 2
    if (num > 2) {
      for (let i = 2; i < num; i++) {
        let temp = [];
         temp.push(1);
        for (let j = 0; j < res[i - 1].length - 1; j++) {
          temp.push(res[i - 1][j] + res[i - 1][j + 1]);
        }
        temp.push(1);
        res.push(temp);
      }
    }
  
    return res;
};