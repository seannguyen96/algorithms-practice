function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
/*

Given the root of a binary search tree, determine the difference of the maximum
and minimum value.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

returns 8, becuase 9 - 1 = 8

*/

const bstMinMax = root => {
  let queue = [root];
  let bstArr = [];
  let min, max, result;

  //iterate through bst, adding values to it
  while(queue.length) {
    const node = queue.shift();
    //console.log(node);
    bstArr.push(node.value);
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
  //find min and max from arr
  console.log(bstArr);
  min = Math.min(bstArr);
  max = Math.max(bstArr);
  result = max - min;
  return result;

};
const newBST = new BinarySearchTree(4);
newBST.left = 2;
newBST.left.left = 1;
newBST.left.right = 3;
newBST.right = 7;
newBST.right.right = 9;
newBST.right.left = null;
console.log(newBST);
console.log(bstMinMax(newBST));


/*

Extension: (not necessarily related in technique to above problem, but
nevertheless still a BST problem)

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
given nodes "p" and "q" in the BST. Return the LCA node itself.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

The LCA of node 1 and node 3 is node 2.
The LCA of node 8 and node 9 is node 9.
The LCA of node 2 and node 8 is node 4.

*/

const lowestCommonAncestor = (root, p, q) => {
  
};

module.exports = {BinarySearchTree, bstMinMax, lowestCommonAncestor};
