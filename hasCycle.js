/**
 * 查找是否有环
 * 输入：head = [3,2,0,-4], pos = 1
   输出：true
   解释：链表中有一个环，其尾部连接到第二个节点。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//方法一  迭代
var hasCycle = function(head) {
  while(head){
      if(head.flag) return true;
      head.flag = true;
      head = head.next;
  }
  return false
};
// -----------------------------------------------------
//方法二 双指针
var hasCycle = function(head) {
  p = [head,head];
  while(p[0]&&p[1]){
      p = [p[0].next,p[1].next?p[1].next.next:null];
      if(p[0]&&p[0] === p[1]) return true;
  }
  return false
};

