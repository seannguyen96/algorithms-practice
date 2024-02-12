function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The result should like like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * Extension:
 * Do it in place
 *
 */

const reverseLinkedList = head => {
  if(!head || !head.next) return head;

  let previous = null;

  while (head) {
    let tempNode = head.next; //save next or you lose it
    head.next = previous;     //reverse pointer 
    previous = head;          //increment previous to current node
    head = tempNode;          //increment current node to next node or null at end of list
  }

  return previous
  
};

module.exports = { Node, reverseLinkedList }
