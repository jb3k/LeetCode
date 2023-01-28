/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
      const stack = [];
  for (let char of s) {
    if (char !== ")") {
      stack.push(char);
      continue;
    }
    let c = stack.pop();
    let queue = [];
    while (c !== "(") {
      queue.push(c);
      c = stack.pop();
    }
    while (queue.length) {
      stack.push(queue.shift());
    }
  }
  return stack.join("");
};