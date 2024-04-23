// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by 
// splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

//initiate a linkedList
//initiate a pointer for traversal (current) starting at the beginning of the list
//compare nodes of each list
  //  append smaller value node to linkedList
  //  update current pointer to the next node
//handle remaining nodes, if one list is exhausted then directly link remaining other list

var mergeTwoLists = function(list1, list2) {
  let linkedList = new ListNode(-1);
  let current = linkedList;
  while(list1 !== null && list2 !== null) {
      if(list1.val < list2.val) {
        current.next = list1;
        list1 = list1.next;
    } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
  }
  current.next = list1 === null ? list2 : list1;
  return linkedList.next;
};

function arrayToList(array) {
  let head = new ListNode(-1);
  let current = head;
  array.forEach((val) => {
      current.next = new ListNode(val);
      current = current.next;
  });
  return head.next;
}

function listToArray(list) {
  let array = [];
  while (list) {
      array.push(list.val);
      list = list.next;
  }
  return array;
}

const runTests = (test) => {
  test.forEach((test, index) => {
    let list1 = arrayToList(test.list1);
    let list2 = arrayToList(test.list2);
    let mergedList = mergeTwoLists(list1, list2);
    let result = listToArray(mergedList);
    console.log(`Test ${index + 1}:`, JSON.stringify(result) === JSON.stringify(test.expected) ? 'PASS' : 'FAIL');
  });
}
let test1 = [
  { list1: [1, 2, 4], list2: [1, 3, 4], expected: [1, 1, 2, 3, 4, 4] },
  { list1: [], list2: [], expected: [] },
  { list1: [], list2: [0], expected: [0] }
];

runTests(test1);

