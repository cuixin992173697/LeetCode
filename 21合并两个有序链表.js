/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if(list1 === null) return list2
  if(list2 === null) return list1
  const node = new ListNode(list2.val <= list1.val ? list2.val : list1.val)
  if(list2.val <= list1.val) list2 = list2.next
  else list1 = list1.next
  node.next = mergeTwoLists(list1,list2)
  return node
}