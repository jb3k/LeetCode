/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    const holder = new ListNode();

    holder.next = head;

    const fast = moveFast(holder, n);   /* Time O(N) */
    const slow = moveSlow(holder, fast);/* Time O(N) */

    slow.next = slow.next.next

    return holder.next;
};

const moveFast = (fast, n) => {
    for (let i = 0; i <= n; i++) {/* Time O(N) */
        fast = fast.next;
    }

    return fast;
}

const moveSlow = (slow, fast) => {
    while (fast) {                     /* Time O(N) */
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}