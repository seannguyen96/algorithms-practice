/*

Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.

EXAMPLE 1:

Input:
[
  [0, 1, 1, 1, 0],  [0][0] [0][1]
  [1, 1, 0, 1, 0],  
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
Output: 1

Input:
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]
Output: 3

Assume that the grid will be an array of arrays of numbers either 0 or 1, and
that the grid will have at least one element.

*/

const numIslands = grid => {
  let islandCount = 0;
  console.log('test')
  //helper func for marking islands
  function depthFirstSearch(grid, row, col) {
    if (grid[row][col] === '0' || !grid[row][col]) return;
    grid[row][col].visited = true;
    depthFirstSearch(grid, row--, col)  // up
    depthFirstSearch(grid, row++, col)  // down
    depthFirstSearch(grid, row, col--)  // left
    depthFirstSearch(grid, row, col++)  // right
  }
  //iterate over each cell in grid
    //increment islandCount if 1
      //mark connected 1s as visited to prevent over counting
  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < row.length; col++) {
      let current = grid[row][col];
      if(current === 1) islandCount++;
      depthFirstSearch(grid, row, col);
    }
  }
  //return islandCount
  return islandCount;
};

const Input = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]
console.log(numIslands(Input));

module.exports = {numIslands};
