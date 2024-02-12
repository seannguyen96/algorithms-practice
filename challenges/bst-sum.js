function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, determine the sum of all the values.
Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

const bstSum = root => {
  const treeTraversal = (node, result = 0) => {
    if(node===null) return result;
    console.log(node);
    console.log(node.value)
    result += node.value;
    console.log(result)
    treeTraversal(node.left);
    treeTraversal(node.right);
  }
  console.log(treeTraversal(root));
};
const newBST = new BinarySearchTree(4);
let newNode = new BinarySearchTree(1);
newBST.left = newNode;
newBST.right = new BinarySearchTree(7);
console.log(newBST);
console.log(bstSum(newBST))




/*

Extension:
Given the root of a binary search tree, reverse the binary search tree in-place
and return the root. Reverse the tree so that for each node, every number on the
left is greater and every number on the right is lesser.

For example, the original tree:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

reverses to:

     4
   /   \
  7     2
 /     / \
9     3   1
 \
  8

Do this in-place, so that we never use the BinarySearchTree constructor to
create any new nodes in memory.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

const bstReverse = root => {
  
};

module.exports = {BinarySearchTree, bstSum, bstReverse};
